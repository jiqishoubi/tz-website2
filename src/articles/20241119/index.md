# 小程序自定义导航栏相关尺寸

# 关键区域

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/86f401041ee04a1888d69a9445d276b9~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5L2f6Iif:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDAzNzA2MjQyNzE2MjU4OSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1743144364&x-orig-sign=eCqc2FVz3Fu1OErQiVs9ddcOcVI%3D)

# 关键点： menuButton 和原生导航栏底部的间距

先说结论：**恒定是`8px`**

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8dc8349e43024d92b610ee15dbe0b258~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5L2f6Iif:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDAzNzA2MjQyNzE2MjU4OSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1743144364&x-orig-sign=%2BnLPcwamaa8cXFyM3Xh1NHYQGHs%3D)

我测试了从 iphone8 到 iphone15、以及 nexus5、nexus6，这个边距都是固定的 8px，胶囊体上边距离原生导航栏的上边（也就是状态栏的下边）的距离不是恒定的

我们在原生导航栏上画一条直线，穿过胶囊体中心，可以发现这条直线并没有在标题文字的中心：

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2672c2cd26f249f28d2fdfe9901f2608~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5L2f6Iif:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDAzNzA2MjQyNzE2MjU4OSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1743144364&x-orig-sign=Dm%2B1bF54N1fF26qyhBXONEjR4%2BM%3D)

# 主要 api

1.  wx.getSystemInfoSync 或者 wx.getWindowInfo 可以获取状态栏高度 statusBarHeight
2.  wx.getMenuButtonBoundingClientRect 可以获取 menuButton 的位置信息

# 代码

AppRect.ts

```ts
import Taro from '@tarojs/taro'

/**
 *
 * 小程序胶囊按钮 导航栏的位置信息
 * 一般用于自定义导航栏的页面
 */

export default class AppRect {
  /**
   * 这个好像要废弃了，使用 getWindowInfo
   */
  static get systemInfo() {
    return Taro.getSystemInfoSync()
  }

  static get windowInfo() {
    return Taro.getWindowInfo()
  }

  static get statusBarHeight(): number {
    return (Taro.getWindowInfo || Taro.getSystemInfoSync)().statusBarHeight || 0
  }

  // 小程序胶囊按钮的位置
  static get menuButtonRect() {
    const defaultMenuButtonRect = {
      bottom: 80,
      height: 32,
      left: 281,
      right: 368,
      top: 48,
      width: 87,
    } // 给一个默认值，避免获取不到的时候div塌陷了 但是一般应该不会获取不到
    const _res = Taro.getMenuButtonBoundingClientRect()
    // console.log(`🚀 ~ _res`, _res)
    return _res || defaultMenuButtonRect
  }

  // 小程序原生导航栏的位置
  static get nativeNavBarRect() {
    const gap = 8 // px 胶囊按钮bottom与导航栏bottom的间距 是恒定的
    const top = this.statusBarHeight
    const bottom = this.menuButtonRect.bottom + gap
    return {
      top,
      height: bottom - top,
      bottom,
    }
  }
}
```

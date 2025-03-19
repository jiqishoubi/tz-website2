export default function getImage(path: string) {
  return require('../assets' + path).default
}

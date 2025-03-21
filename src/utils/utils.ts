// 20240104 => January 4, 2024
export function id2DateStr(id: string) {
  const year = id.substring(0, 4)
  const month = id.substring(4, 6)
  const day = id.substring(6, 8)

  const monthMap = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  }
  // @ts-ignore
  const monthEn = monthMap[month]

  // 转英文
  return `${monthEn} ${day}, ${year}`
}

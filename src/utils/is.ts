export const isObject = <T = Record<string, any>>(value: unknown): value is T => {
  if (value === undefined || value === null) {
    return false
  }

  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]'
}

export const isNum = (value: unknown): value is number => {
  if (value === undefined || value === null) {
    return false
  }

  return typeof value !== 'number' ? !isNaN(Number(value)) : true
}

export const isString = (value: unknown): value is string => {
  if (value === undefined || value === null) {
    return false
  }

  return Object.prototype.toString.call(value) === '[object String]'
}

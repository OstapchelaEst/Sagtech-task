import { ValidCurrenciesNames } from '../types/types'

export const getValidCurrenciesNames = (data: { [x: string]: string }) => {
  const result = []
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      result.push({
        value: key,
        title: `${key} - ${data[key]}`,
      })
    }
  }
  result.sort((a, b) => {
    if (a.value < b.value) return -1
    if (a.value > b.value) return 1
    return 0
  })

  return result as ValidCurrenciesNames
}

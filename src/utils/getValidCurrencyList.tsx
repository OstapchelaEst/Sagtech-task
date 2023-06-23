import { CurrencyInformation, ValidCurrenciesList } from '../types/types'

export const getValidCurrencyList = (data: CurrencyInformation) => {
  const result = []
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key as keyof typeof data]
      const cost = String((1 / Number(element.rate)).toFixed(4))
      result.push({
        currentCurrency: key,
        currentCurrencyDescription: element.currency_name,
        cost: cost,
      })
    }
  }
  return result as ValidCurrenciesList
}

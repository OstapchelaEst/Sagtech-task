import { ValidCurrenciesList } from '../types/types'

export const getFilteredCurrencies = (
  currencies: ValidCurrenciesList,
  value: string
): ValidCurrenciesList => {
  return currencies.filter((item) => {
    const name = item.currentCurrency.toLocaleLowerCase()
    const description = item.currentCurrencyDescription.toLocaleLowerCase()
    if (name.includes(value) || description.includes(value)) return true
    return false
  })
}

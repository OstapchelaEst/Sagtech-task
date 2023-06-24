import { ValidCurrenciesNames } from '../types/types'

export const getValidCurrenciesForConverter = (data: ValidCurrenciesNames) => {
  return data.map((item) => {
    return { ...item, title: item.value }
  })
}

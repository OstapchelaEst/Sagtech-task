type ValidCurrenciesNames = { value: string; title: string }[]

type ValidCurrenciesList = {
  currentCurrency: string
  currentCurrencyDescription: string
  cost: string
}[]

type ResponseCurrenciesNames = {
  currencies: { [x: string]: string }
}

type CurrencyInformation = {
  [x: string]: {
    currency_name: string
    rate: string
    rate_for_amount: string
  }
}

type ResponseCurrenciesCosts = {
  base_currency_code: string
  base_currency_name: string
  amount: string
  updated_date: string
  rates: CurrencyInformation
}

export type {
  ValidCurrenciesNames,
  ValidCurrenciesList,
  CurrencyInformation,
  ResponseCurrenciesNames,
  ResponseCurrenciesCosts,
}

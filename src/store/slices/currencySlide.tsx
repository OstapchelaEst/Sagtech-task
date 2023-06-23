import { createSlice } from '@reduxjs/toolkit'
import { ValidCurrenciesNames } from '../../types/types'
import { getCurrenciesNamesThunk } from '../actions/getCurrenciesThunk'

const LOCAL_STORAGE_BASIC_CURRENCY_KEY = 'basicCurrency'
const RESOURCE_CURRENCIES_ERROR_MESSAGE =
  'Unfortunately, the list of currencies is not available.'

interface IInitialState {
  basicCurrency: string
  allCurrencies: ValidCurrenciesNames
  currenciesErrorMessage: string
}

const initialState: IInitialState = {
  basicCurrency: localStorage.getItem(LOCAL_STORAGE_BASIC_CURRENCY_KEY)
    ? (localStorage.getItem(LOCAL_STORAGE_BASIC_CURRENCY_KEY) as string)
    : 'BYN',
  allCurrencies: [],
  currenciesErrorMessage: '',
}

export const currencySlide = createSlice({
  name: 'currency-slice',
  initialState,
  reducers: {
    setBasicCurrency: (state, { payload }) => {
      state.basicCurrency = payload
      localStorage.setItem(LOCAL_STORAGE_BASIC_CURRENCY_KEY, payload)
    },
    setAllCurrencies: (state, { payload }) => {
      state.allCurrencies = payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getCurrenciesNamesThunk.fulfilled, (state, { payload }) => {
      state.allCurrencies = payload
      state.currenciesErrorMessage = ''
    })
    builder.addCase(getCurrenciesNamesThunk.rejected, (state, { payload }) => {
      if (payload) {
        state.currenciesErrorMessage = RESOURCE_CURRENCIES_ERROR_MESSAGE
        state.allCurrencies = payload
      }
    })
  },
})

export default currencySlide.reducer

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllCurrenciesNames } from '../../services/fetch/getAllCurrenciesNames'
import { ValidCurrenciesNames } from '../../types/types'
import { getValidCurrenciesNames } from '../../utils/getValidCurrenciesNames'

export const getCurrenciesNamesThunk = createAsyncThunk<
  ValidCurrenciesNames,
  void,
  {
    rejectValue: []
  }
>('get-all-currencies', async (_, { rejectWithValue }) => {
  try {
    const response = (await getAllCurrenciesNames()).currencies
    const newCurrencies = getValidCurrenciesNames(response)
    return newCurrencies
  } catch (error) {
    throw rejectWithValue([])
  }
})

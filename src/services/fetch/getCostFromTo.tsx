import { ResponseCurrenciesCosts } from '../../types/types'
import { API } from './axios-instance'

export const getCostFromTo = async (
  fromCurrency: string,
  toCurrency: string,
  amount: string
): Promise<ResponseCurrenciesCosts> => {
  try {
    const response = await API.get(
      `convert?api_key=${process.env.REACT_APP_API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}&format=json`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

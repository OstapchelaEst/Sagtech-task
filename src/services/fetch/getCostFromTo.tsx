import { API } from './axios-instance'
import { API_KEY } from '../../constants'
import { ResponseCurrenciesCosts } from '../../types/types'

export const getCostFromTo = async (
  fromCurrency: string,
  toCurrency: string,
  amount: string
): Promise<ResponseCurrenciesCosts> => {
  try {
    const response = await API.get(
      `convert?api_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}&format=json`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

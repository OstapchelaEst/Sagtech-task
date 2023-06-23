import { ResponseCurrenciesCosts } from '../../types/types'
import { API } from './axios-instance'

export const getCurrenciesCosts = async (
  currency: string
): Promise<ResponseCurrenciesCosts> => {
  try {
    const response = await API.get(
      `convert?api_key=${process.env.REACT_APP_API_KEY}&from=${currency}&amount=1&format=json`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

import { API } from './axios-instance'
import { API_KEY } from '../../constants'
import { ResponseCurrenciesCosts } from '../../types/types'

export const getCurrenciesCosts = async (
  currency: string
): Promise<ResponseCurrenciesCosts> => {
  try {
    const response = await API.get(
      `convert?api_key=${API_KEY}&from=${currency}&amount=1&format=json`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

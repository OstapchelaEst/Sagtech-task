import { ResponseCurrenciesNames } from '../../types/types'
import { API } from './axios-instance'

export const getAllCurrenciesNames =
  async (): Promise<ResponseCurrenciesNames> => {
    try {
      const response = await API.get(
        `list?api_key=${process.env.REACT_APP_API_KEY}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }

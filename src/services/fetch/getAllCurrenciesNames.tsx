import { API } from './axios-instance'
import { API_KEY } from '../../constants'
import { ResponseCurrenciesNames } from '../../types/types'

export const getAllCurrenciesNames =
  async (): Promise<ResponseCurrenciesNames> => {
    try {
      const response = await API.get(`list?api_key=${API_KEY}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

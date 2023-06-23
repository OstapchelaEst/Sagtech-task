import axios, { AxiosInstance } from 'axios'
import { BASIC_URL } from '../../constants'

const API: AxiosInstance = axios.create({
  baseURL: BASIC_URL,
})

export { API }

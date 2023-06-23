import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import currencySlide from './slices/currencySlide'

export const rootReducer = combineReducers({ currencySlide })

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

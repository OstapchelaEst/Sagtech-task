import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import currencySlice from './slices/currencySlice'
import loaderSlice from './slices/loaderSlice'

export const rootReducer = combineReducers({ currencySlice, loaderSlice })

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

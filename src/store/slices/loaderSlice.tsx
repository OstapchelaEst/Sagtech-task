import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  isLoading: boolean
}

const initialState: IInitialState = {
  isLoading: true,
}

export const loaderSlice = createSlice({
  name: 'loader-slice',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    endLoading: (state) => {
      state.isLoading = false
    },
  },
})

export default loaderSlice.reducer

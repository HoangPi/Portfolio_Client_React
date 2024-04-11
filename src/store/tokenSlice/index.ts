import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const initialState= {
    value: '',
}

export const tokenSlice = createSlice({
  name: 'token',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>)=>{
        state.value = action.payload
    },
    deleteToken: (state) =>{
        state.value = ''
    }
  }
})

export const { saveToken, deleteToken } = tokenSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectName = (state: RootState) => state.tokenSlice

export default tokenSlice.reducer
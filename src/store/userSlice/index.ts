import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const initialState= {
    value: '',
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<string>)=>{
        state.value = action.payload
    },
    deleteUser: (state) =>{
        state.value = ''
    }
  }
})

export const { saveUser, deleteUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectName = (state: RootState) => state.userSlice

export default userSlice.reducer
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userSlice from './userSlice'
import expireReducer from 'redux-persist-expire'
import tokenSlice from './tokenSlice'
// ...

const reducers = combineReducers({
  userSlice,
  tokenSlice
})
const persistConfig = {
  key:'root',
  transforms:[
    // Create a transformer by passing the reducer key and configuration. Values
       // shown below are the available configurations with default values
       expireReducer('userSlice', {
        // (Optional) Key to be used for the time relative to which store is to be expired
        persistedAtKey: '__persisted_at',
        // (Required) Seconds after which store will be expired
        expireSeconds: 60,
        // (Optional) State to be used for resetting e.g. provide initial reducer state
        expiredState: {value:''},
        // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey` 
        // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
        autoExpire: true
      })
      // You can add more `expireReducer` calls here for different reducers
      // that you may want to expire
  ],
  storage
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer
})
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { CurrentReducer } from './reducers/CurrentReducer'
import { HistoryReducer } from './reducers/HistoryReducer'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
  reducer: { current: CurrentReducer, history: HistoryReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

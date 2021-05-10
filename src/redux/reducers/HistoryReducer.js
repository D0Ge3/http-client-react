import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/currentActions'

const initialState = [
  
]

export const HistoryReducer = createReducer(initialState, {
  // [actions.setIsLoading]: (state, action) => {
  //   state.isLoading = action.payload
  // },
  // [actions.setTickets]: (state, action) => {
  //   state.tickets = action.payload
  // },
})
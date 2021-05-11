import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/historyActions'

const initialState = []

export const HistoryReducer = createReducer(initialState, {
  [actions.pushHistoryInState]: (state, action) => {
    const newState = [action.payload, ...state]
    return newState
  },
  [actions.setHistory]: (state, action) => {
    return action.payload
  },
})

import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/currentActions'

const initialState = {
  request: {
    url: '',
    method: 'GET',
    headers: [],
    body: null,
  },
  response: {
    headers: [],
    data: null,
    status: null,
  },
  isLoading: false,
}

export const CurrentReducer = createReducer(initialState, {
  [actions.setIsLoading]: (state, action) => {
    state.isLoading = action.payload
  },
  [actions.setUrl]: (state, action) => {
    state.request.url = action.payload
  },
  [actions.setMethod]: (state, action) => {
    state.request.method = action.payload
  },
  [actions.setBody]: (state, action) => {
    state.request.body = action.payload
  },
  [actions.setReqHeaders]: (state, action) => {
    state.request.headers = action.payload
  },

  [actions.setStatus]: (state, action) => {
    state.response.status = action.payload
  },
  [actions.setData]: (state, action) => {
    state.response.data = action.payload
  },
  [actions.setResHeaders]: (state, action) => {
    state.response.headers = action.payload
  },
})

import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { setQuery } from './currentActions'

export const setHistory = createAction('SET_HISTORY')
export const pushHistoryInState = createAction('PUSH_HISTORY')

export const pushHistory = (request, response) => async (dispatch) => {
  const historyItem = { id: nanoid(), request, response }
  dispatch(pushHistoryInState(historyItem))
  try {
    const localHistory = localStorage.getItem('history')
    if (localHistory) {
      const oldHistory = JSON.parse(localHistory)
      localStorage.setItem(
        'history',
        JSON.stringify([historyItem, ...oldHistory])
      )
    } else {
      localStorage.setItem('history', JSON.stringify([historyItem]))
    }
  } catch (e) {
    // limit
  }
}

export const loadHistoryFromStorage = () => async (dispatch) => {
  const history = localStorage.getItem('history')
  if (history) {
    dispatch(setHistory(JSON.parse(history)))
  }
}

export const selectRequest = (id) => async (dispatch, getState) => {
  const req = getState().history.filter((req) => req.id === id)[0]
  dispatch(setQuery(req))
}

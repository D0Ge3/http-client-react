import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export const setHistory = createAction('SET_HISTORY')
export const pushHistoryInState = createAction('PUSH_HISTORY')

export const pushHistory = (request) => async (dispatch) => {
  const historyItem = { id: nanoid(), ...request }
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

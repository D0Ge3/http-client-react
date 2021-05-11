import axios from 'axios'

import { makeHeaders } from '../../utils/makeHeaders'
import {
  setResHeaders,
  setData,
  setStatus,
  setIsLoading,
} from './currentActions'

import { pushHistory } from './historyActions'

export const sendRequest = () => async (dispatch, getState) => {
  const { method, headers, url, body } = getState().current.request
  // setResponse(null)
  let request = {}
  let response = {}
  try {
    dispatch(setIsLoading(true))
    // dispatch(pushHistory({ method, headers, url, body }))
    request = { url, method, headers, body }
    if (method === 'GET') {
      const res = await axios.get(url, { headers: makeHeaders(headers) })
      response = {
        headers: res.headers,
        data: res.data,
        status: { code: res.status, text: res.statusText },
      }
      dispatch(setResHeaders(response.headers))
      dispatch(setData(response.data))
      dispatch(setStatus(response.status))
    } else {
      const res = await axios[method.toLowerCase()](url, body, {
        headers: makeHeaders(headers),
      })
      response = {
        headers: res.headers,
        data: res.data,
        status: { code: res.status, text: res.statusText },
      }
      dispatch(setResHeaders(response.headers))
      dispatch(setData(response.data))
      dispatch(setStatus(response.status))
    }
  } catch (err) {
    if (err.response) {
      response = {
        headers: err.response.headers,
        data: err.response.data,
        status: { code: err.response.status, text: err.response.statusText },
      }
      dispatch(setResHeaders(response.headers))
      dispatch(setStatus(response.status))
      dispatch(setData(response.data))
    } else {
      response = {
        headers: [],
        data: null,
        status: { code: 1, text: 'Network error' },
      }
      dispatch(setResHeaders(response.headers))
      dispatch(setStatus(response.status))
      dispatch(setData(response.data))
    }
  }
  dispatch(pushHistory(request, response))
  dispatch(setIsLoading(false))
}

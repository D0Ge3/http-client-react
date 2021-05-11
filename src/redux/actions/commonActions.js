import axios from 'axios'

import { makeHeaders } from '../../utils/makeHeaders'
import {
  setResHeaders,
  setData,
  setStatus,
  setIsLoading,
} from './currentActions'

export const sendRequest = () => async (dispatch, getState) => {
  const { method, headers, url, body } = getState().current.request
  // setResponse(null)
  try {
    dispatch(setIsLoading(true))
    if (method === 'GET') {
      const res = await axios.get(url, { headers: makeHeaders(headers) })
      dispatch(setResHeaders(res.headers))
      dispatch(setData(res.data))
      dispatch(setStatus({ code: res.status, text: res.statusText }))
    } else {
      const res = await axios[method.toLowerCase()](url, body, {
        headers: makeHeaders(headers),
      })
      dispatch(setResHeaders(res.headers))
      dispatch(setData(res.data))
      dispatch(setStatus({ code: res.status, text: res.statusText }))
    }
  } catch (err) {
    if (err.response) {
      dispatch(setResHeaders(err.response.headers))
      dispatch(
        setStatus({ code: err.response.status, text: err.response.statusText })
      )
      dispatch(setData(err.response.data))
    } else {
      dispatch(setResHeaders([]))
      dispatch(setStatus({ code: 1, text: 'Network error' }))
      dispatch(setData(null))
    }
  }

  dispatch(setIsLoading(false))
}

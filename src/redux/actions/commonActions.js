import axios from 'axios'

import { makeHeaders } from '../../utils/makeHeaders'
import { setResHeaders, setData, setStatus, setIsLoading } from './currentActions'

export const sendRequest = () => async (dispatch, getState) => {
  const { method, headers, url, body } = getState().current.request
  // setResponse(null)
  dispatch(setIsLoading(true))
  if (method === 'GET') {
    const res = await axios.get(url, { headers: makeHeaders(headers) })
    dispatch(setResHeaders(res.headers))
    dispatch(setData(res.data))
    dispatch(setStatus(`${res.status} ${res.statusText}`))

  } else {
    const res = await axios[method.toLowerCase()](url, body, {
      headers: makeHeaders(headers),
    })
    dispatch(setResHeaders(res.headers))
    dispatch(setData(res.data))
    dispatch(setStatus(`${res.status} ${res.statusText}`))
  }
  dispatch(setIsLoading(false))
}

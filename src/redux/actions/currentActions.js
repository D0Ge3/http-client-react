import { createAction } from '@reduxjs/toolkit'

export const setUrl = createAction('SET_URL')
export const setMethod = createAction('SET_METHOD')
export const setBody = createAction('SET_BODY')
export const setIsLoading = createAction('SET_IS_LOADING')
export const setReqHeaders = createAction('SET_REQ_HEADERS')

export const setStatus = createAction('SET_STATUS')
export const setData = createAction('SET_DATA')
export const setResHeaders = createAction('SET_RES_HEADERS')

export const setRequest = createAction('SET_REQUEST')

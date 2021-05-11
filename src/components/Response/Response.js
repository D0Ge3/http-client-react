import { useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
import * as cs from 'classnames'

import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
import { TabsPanel } from '../../common/TabsPanel/TabsPanel'
import { Headers } from '../Headers/Headers'
import { useSelector } from 'react-redux'

import s from './Response.module.scss'

export const Response = () => {
  const jsonEditorRef = useRef()
  const { status, data, headers } = useSelector(
    (state) => state.current.response
  )

  const isLoading = useSelector((state) => state.current.isLoading)
  const [tab, setTab] = useState(0)
  const [headersArr, setHeadersArr] = useState([])
  useEffect(() => {
    const tempHeaders = []
    if (headers) {
      for (let headerName in headers) {
        tempHeaders.push({
          id: nanoid(),
          name: headerName,
          value: headers[headerName],
        })
      }
      setHeadersArr(tempHeaders)
    }
    // eslint-disable-next-line
  }, [headers])
  useEffect(() => {
    const editor =
      jsonEditorRef && jsonEditorRef.current && jsonEditorRef.current.jsonEditor
    if (editor && data) {
      editor.update(data)
    }
  }, [jsonEditorRef, data])
  const renderTab = () => {
    switch (tab) {
      case 0:
        return (
          <div className={s.tabWrap}>
            {data ? (
              <Editor ref={jsonEditorRef} mode="preview" value={data} />
            ) : (
              <></>
            )}
          </div>
        )
      case 1:
        return (
          <div className={s.tabWrap}>
            <Headers headers={headersArr} readOnly />
          </div>
        )
      default:
        return <></>
    }
  }
  console.log('render')
  const statusStyle = (code) =>
    cs(s.status, {
      [s.status_good]: code >= 200 && code <= 299,
      [s.status_bad]: code > 299 || code < 200,
    })

  return (
    <div className={s.wrap}>
      <TabsPanel
        tabs={['Body', 'Headers']}
        activeTab={tab}
        changeTab={(ind) => setTab(ind)}
        className={s.tabPanel}
      />
      {!isLoading && status.code && (
        <span>
          Status:{' '}
          <span className={statusStyle(status.code)}>
            {status.code === 1 ? '' : status.code} {status.text}
          </span>
        </span>
      )}
      {!isLoading && renderTab(tab)}
    </div>
  )
}

import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import s from './Response.module.scss'
import get from 'lodash/get'
import { TabsPanel } from '../../common/TabsPanel/TabsPanel'
import { Headers } from '../Headers/Headers'
import { useSelector } from 'react-redux'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

export const Response = () => {
  const { status, data, headers } = useSelector(
    (state) => state.current.response
  )
  const [tab, setTab] = useState(0)
  const [headersArr, setHeadersArr] = useState([])
  useEffect(() => {
    const tempHeaders = []
    if (headers) {
      for (let headerName in headers) {
        console.log(headerName)
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
  const renderTab = () => {
    switch (tab) {
      case 0:
        return (
          <div className={s.tabWrap}>
            {data ? (
              <Editor mode="preview" value={data} style={{ height: '400px' }} />
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
  return (
    <div className={s.wrap}>
      <TabsPanel
        tabs={['Body', 'Headers']}
        activeTab={tab}
        changeTab={(ind) => setTab(ind)}
      />
      {renderTab(tab)}
    </div>
  )
}

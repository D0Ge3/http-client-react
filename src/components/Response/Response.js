import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import s from './Response.module.scss'
import get from 'lodash/get'
import { TabsPanel } from '../../common/TabsPanel/TabsPanel'
import { Headers } from '../Headers/Headers'

import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

export const Response = ({ response }) => {
  const [tab, setTab] = useState(0)
  const [headers, setHeaders] = useState([])
  useEffect(() => {
    const tempHeaders = []
    if (get(response, 'headers')) {
      for (let headerName in response.headers) {
        console.log(headerName)
        tempHeaders.push({
          id: nanoid(),
          name: headerName,
          value: response.headers[headerName],
        })
      }
      setHeaders(tempHeaders)
    }
    // eslint-disable-next-line
  }, [get(response, 'headers')])
  const renderTab = () => {
    switch (tab) {
      case 0:
        return (
          <div className={s.tabWrap}>
            {get(response, 'data', null) ? (
              <Editor
                mode="preview"
                value={get(response, 'data', null)}
                style={{ height: '400px' }}
              />
            ) : (
              <></>
            )}
          </div>
        )
      case 1:
        return (
          <div className={s.tabWrap}>
            <Headers headers={headers} readOnly />
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

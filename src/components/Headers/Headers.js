import '../../utils/nanoid-polyfill'
import { nanoid } from 'nanoid'

import s from './Headers.module.scss'
import { Scrollbars } from 'react-custom-scrollbars'
import { CloseIcon } from '../../common/icons/CloseIcon'
import { AddIcon } from '../../common/icons/AddIcon'

export const Headers = ({ headers, setHeaders, readOnly }) => {
  const addHeader = () =>
    setHeaders([...headers, { id: nanoid(), name: '', value: '' }])
  const deleteHeader = (id) =>
    setHeaders([...headers.filter((header) => header.id !== id)])
  const changeHeader = (id, e) => {
    setHeaders([
      ...headers.map((header) =>
        header.id === id
          ? { ...header, [e.target.name]: e.target.value }
          : header
      ),
    ])
  }
  return (
    <Scrollbars>
      <table className={s.table}>
        {headers.length > 0 && (
          <thead>
            <tr>
              <td>Key</td>
              <td>Value</td>
              {!readOnly && <td></td>}
            </tr>
          </thead>
        )}
        <tbody>
          {headers.map((header) => (
            <tr key={header.id}>
              <td>
                <input
                  className={s.input}
                  type="text"
                  name="name"
                  value={header.name}
                  onChange={(e) => changeHeader(header.id, e)}
                  disabled={readOnly}
                />
              </td>
              <td>
                <input
                  className={s.input}
                  type="text"
                  name="value"
                  disabled={readOnly}
                  value={header.value}
                  onChange={(e) => changeHeader(header.id, e)}
                />
              </td>
              {!readOnly && (
                <td className={s.close} onClick={() => deleteHeader(header.id)}>
                  <CloseIcon />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {!readOnly && <AddIcon onClick={addHeader} />}
    </Scrollbars>
  )
}

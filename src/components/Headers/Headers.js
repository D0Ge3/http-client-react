import { nanoid } from 'nanoid'

import s from './Headers.module.scss'

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
    <div>
      {headers.map((header) => (
        <div key={header.id}>
          <input
            type="text"
            name="name"
            value={header.name}
            onChange={(e) => changeHeader(header.id, e)}
            disabled={readOnly}
          />
          <input
            type="text"
            name="value"
            disabled={readOnly}
            value={header.value}
            onChange={(e) => changeHeader(header.id, e)}
          />
          {!readOnly && (
            <button onClick={() => deleteHeader(header.id)}>x</button>
          )}
        </div>
      ))}
      {!readOnly && <button onClick={addHeader}>+</button>}
    </div>
  )
}

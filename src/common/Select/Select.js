import s from './Select.module.scss'

export const Select = ({ options, name, onChange, value, ...rest }) => (
  <div className={s.selectWrapper}>
    <select
      className={s.select}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

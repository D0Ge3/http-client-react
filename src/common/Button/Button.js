import s from './Button.module.css'

export const Button = ({ children, onClick, ...rest }) => (
  <button className={s.button} onClick={onClick} {...rest}>
    {children}
  </button>
)

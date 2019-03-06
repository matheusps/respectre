import React from 'react'
import { string, oneOf, bool } from 'prop-types'

const getClass = param => !!param && `btn-${param}`

const Button = ({
  children,
  color,
  size,
  action,
  circle,
  active,
  loading,
  disabled,
  ...props
}) => (
  <button
    className={`
        btn
        ${getClass(color)}
        ${getClass(size)}
        ${action && 'btn-action'}
        ${circle && 's-circle'}
        ${loading && 'loading'}
        ${active && 'active'}
    `}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)

Button.propTypes = {
  color: string,
  size: oneOf(['sm', 'lg']),
  action: bool,
  circle: bool,
  active: bool,
  disabled: bool,
  loading: bool,
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'

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
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  action: PropTypes.bool,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}

export default Button

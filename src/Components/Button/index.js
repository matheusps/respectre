import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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
}) => {
  const buttonClasses = classNames('btn', getClass(color), getClass(size), {
    'btn-action': action,
    's-circle': circle,
    loading: loading,
    active: active,
  })
  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg', 'block']),
  action: PropTypes.bool,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button

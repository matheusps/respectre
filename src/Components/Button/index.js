import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const getClass = param => !!param && `btn-${param}`

const Button = ({
  children,
  className,
  color,
  size,
  action,
  circle,
  active,
  loading,
  disabled,
  ...props
}) => {
  const buttonClasses = classNames(
    'btn',
    className,
    getClass(color),
    getClass(size),
    {
      'btn-action': action,
      's-circle': circle,
      loading: loading,
      active: active,
    }
  )
  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Button Color */
  color: PropTypes.string,
  /** Size class of button */
  size: PropTypes.oneOf(['sm', 'lg', 'block']),
  /** If is a action button */
  action: PropTypes.bool,
  /** If has the circle shape */
  circle: PropTypes.bool,
  /** If is active or not */
  active: PropTypes.bool,
  /** If is disabled or not */
  disabled: PropTypes.bool,
  /** Indicates a loading state */
  loading: PropTypes.bool,
  /** Aditional css classes */
  className: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
}

export default Button

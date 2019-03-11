import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Label = ({ className, theme, rounded, children }) => {
  const labelClaasses = classNames(className, 'label', `label-${theme}`, {
    'label-rounded': rounded,
  })
  return <span className={labelClaasses}>{children}</span>
}

Label.propTypes = {
  /** Aditional css classes */
  className: PropTypes.string,
  /** Label theme */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
  /** If has rounded corners or not */
  rounded: PropTypes.bool,
}

export default Label

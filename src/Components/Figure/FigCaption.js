import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FigCaption = ({ className, position, children, ...props }) => {
  const figcaptionClasses = classNames(
    className,
    'figure-caption',
    `text-${position}`
  )
  return <figcaption className={figcaptionClasses}>{children}</figcaption>
}

FigCaption.propTypes = {
  /** Aditional css classes */
  className: PropTypes.string,
  /** Caption position */
  position: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
}

FigCaption.defaultProps = {
  position: 'center',
}

export default FigCaption

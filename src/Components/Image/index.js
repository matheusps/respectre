import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Image = ({ src, responsive, fit, className, ...props }) => {
  const imageClasses = classNames(className, `img-fit-${fit}`, {
    'img-responsive': responsive,
  })
  return <img className={imageClasses} src={src} {...props} />
}

Image.propTypes = {
  /** Image source */
  src: PropTypes.string.isRequired,
  /** If is responsive or not */
  responsive: PropTypes.bool,
  /** Image fit relative to it's parent */
  fit: PropTypes.oneOf(['contain', 'cover']),
}

Image.defaultProps = {
  responsive: false,
}

export default Image

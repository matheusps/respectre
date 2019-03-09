import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Avatar = ({ size, background, image, chars, className, ...props }) => {
  const avatarClasses = classNames(
    className,
    'avatar',
    `avatar-${size}`,
    `bg-${background}`
  )
  return (
    <figure className={avatarClasses} data-initial={chars} {...props}>
      {!!image && <img src={image} alt="Avatar" />}
    </figure>
  )
}

Avatar.defaultProps = {
  size: 'sm',
  background: 'primary',
}

Avatar.propTypes = {
  /** Avatar size */
  size: PropTypes.oneOf(['xl', 'lg', 'sm', 'xs']),
  /** Color of the background */
  background: PropTypes.oneOf([
    'primary',
    'secondary',
    'dark',
    'gray',
    'success',
    'warning',
    'error',
  ]),
  /** Image of the avatar */
  image: PropTypes.string,
  /** Caracters to be shown if an image is not passed */
  chars: PropTypes.string,
  /** Aditional css classes */
  className: PropTypes.string,
}

export default Avatar

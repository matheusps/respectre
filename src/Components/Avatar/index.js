import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ size, background, image, chars }) => (
  <figure
    className={`avatar avatar-${size} bg-${background}`}
    data-initial={chars}
  >
    {!!image && <img src={image} alt="Avatar" />}
  </figure>
)

Avatar.defaultProps = {
  size: 'sm',
  background: 'primary',
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'sm', 'xs']),
  background: PropTypes.oneOf([
    'primary',
    'secondary',
    'dark',
    'gray',
    'success',
    'warning',
    'error',
  ]),
  image: PropTypes.string,
  chars: PropTypes.string,
}

export default Avatar

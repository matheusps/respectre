import React from 'react'
import { string, oneOf } from 'prop-types'

const Avatar = ({ size, background, image, chars }) => (
    <figure
    className={`avatar avatar-${size} bg-${background}`}
    data-initial={chars}>
        { !!image && <img src={image} alt="Avatar"></img> }
    </figure>
)

Avatar.defaultProps = {
    size: 'sm',
    background: 'primary'
}

Avatar.propTypes = {
    size: oneOf([ 'xl', 'lg', 'sm', 'xs' ]),
    background: oneOf([ 
        'primary',
        'secondary',
        'dark',
        'gray',
        'success',
        'warning',
        'error'
    ]),
    image: string,
    chars: string
}

export default Avatar
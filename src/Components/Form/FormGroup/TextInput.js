import React from 'react'
import Proptypes from '../../Proptypes'
import { oneOf } from 'prop-types'

const TextInput = ({ modifiers, type, ...props }) => (
    <input type={type} className={`form-input ${modifiers}`} {...props} />
)

TextInput.defaultProps = {
    type: 'text'
}

TextInput.propTypes = {
    ...Proptypes,
    type: oneOf([
        'text',
        'email',
        'url',
        'search',
        'tel',
        'password',
        'number',
        'date',
        'color',
        'file'
    ])
}

export default TextInput
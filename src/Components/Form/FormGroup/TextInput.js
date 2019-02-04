import React from 'react'
import Proptypes from '../../Proptypes'
import { oneOf, string } from 'prop-types'

const TextInput = ({ id, modifiers, type, ...props }) => (
    <input id={id} type={type} className={`form-input ${modifiers}`} {...props} />
)

TextInput.defaultProps = {
    type: 'text'
}

TextInput.propTypes = {
    ...Proptypes,
    id: string.isRequired,
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
import React from 'react'
import { string } from 'prop-types'

const Input = ({ modifiers, ...props }) => (
    <input className={`form-input ${modifiers}`} {...props} />
)

Input.propTypes = {
    modifiers: string
}

export default Input
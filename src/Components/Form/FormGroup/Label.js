import React from 'react'
import Proptypes from '../../Proptypes'
import { string } from 'prop-types'

const Label = ({ htmlFor, modifiers, ...props}) => (
    <label htmlFor={htmlFor} className={`form-label ${modifiers}`} {...props}></label>
)

Label.propTypes = {
    ...Proptypes,
    htmlFor: string.isRequired
}

export default Label
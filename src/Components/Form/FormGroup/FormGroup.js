import React from 'react'
import Label from './Label'
import TextInput from './TextInput'
import Proptypes from '../../Proptypes'

const FormGroup = ({ modifiers, children }) => (
    <div className={`form-group ${modifiers}`}>
        { children }
    </div>
)

FormGroup.TextInput = TextInput
FormGroup.Label = Label

FormGroup.propTypes = Proptypes

export default FormGroup
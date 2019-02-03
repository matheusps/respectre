import React from 'react'
import Input from './Input';
import Label from './Label';
import Proptypes from '../../Proptypes';

const FormGroup = ({ modifiers, children }) => (
    <div className={`form-group ${modifiers}`}>
        { children }
    </div>
)

FormGroup.Input = Input
FormGroup.Label = Label

FormGroup.propTypes = Proptypes

export default FormGroup
import React from 'react'
import Proptypes from '../../Proptypes';

const Input = ({ modifiers, ...props }) => (
    <input className={`form-input ${modifiers}`} {...props} />
)

Input.propTypes = Proptypes

export default Input
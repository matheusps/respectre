import React from 'react'
import Proptypes from '../../Proptypes'

const Label = ({ modifiers, ...props}) => (
    <label className={`form-label ${modifiers}`} {...props}></label>
)

Label.propTypes = Proptypes

export default Label
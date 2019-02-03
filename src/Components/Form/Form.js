import React from 'react'
import FormGroup from './FormGroup'
import Proptypes from '../Proptypes';

const Form = ({ modifiers, children }) => (
    <form className={`form-horizonta ${modifiers}`}>
        { children }
    </form>
)

Form.Group = FormGroup

Form.propTypes = Proptypes

export default Form
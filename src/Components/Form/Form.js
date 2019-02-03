import React from 'react'
import { string } from 'prop-types'
import Input from './Input';

const Form = ({ modifiers, children }) => (
    <form className={`form-group ${modifiers}`}>
        { children }
    </form>
)

Form.Input = Input

Form.propTypes = {
    modifiers: string
}

export default Form
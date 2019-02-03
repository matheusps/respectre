import React from 'react'
import Article from './Article'
import { Form } from '../../../src/Components'

const style = {
    width: '30%'
}

const FormUsage = props => (
    <Article {...props}>
        <div style={style}>
            <Form>
                <Form.Input />
            </Form>
        </div>
    </Article>
)

export default FormUsage
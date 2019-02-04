import React from 'react'
import Article from './Article'
import { Form } from '../../../src/Components'

const style = {
    width: '30%'
}

const forms = [
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
]

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

const FormUsage = props => (
    <Article {...props}>
        <div style={style}>
            <Form>
                { forms.map( item => (
                    <Form.Group key={item}>
                        <Form.Group.Label htmlFor={`id__${item}`}> { capitalize(item) } </Form.Group.Label>
                        <Form.Group.TextInput id={`id__${item}`} type={item} />
                    </Form.Group>
                ))
                }
                
            </Form>
        </div>
    </Article>
)

export default FormUsage
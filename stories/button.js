import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../src/Components/Button'

export default storiesOf('Button', module)
    .add('with text', () => (
        <Button> reSpectre default </Button>
    ))
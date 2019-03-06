import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Button } from '../lib/respectre'
import '../lib/respectre.css'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('play with it', () => (
    <Button
      color={select(
        'Colors',
        {
          Default: '',
          Primary: 'primary',
          Success: 'success',
          Error: 'error',
          Link: 'link',
        },
        ''
      )}
      size={select(
        'Sizes',
        {
          Default: '',
          Small: 'sm',
          Large: 'lg',
          Full: 'block',
        },
        ''
      )}
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
      action={boolean('Action', false)}
      circle={boolean('Circle', false)}
      active={boolean('Active', false)}
    >
      {text('Text', 'respectre')}
    </Button>
  ))

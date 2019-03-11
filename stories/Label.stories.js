import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Label } from '../lib/respectre'
import '../lib/respectre.css'

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('play with it', () => (
    <Label
      theme={select(
        'Theme',
        {
          Default: '',
          Primary: 'primary',
          Secondary: 'secondary',
          Success: 'success',
          Error: 'error',
          Warning: 'warning',
        },
        ''
      )}
      rounded={boolean('Roundend', false)}
    >
      {text('Text', 'respectre')}
    </Label>
  ))

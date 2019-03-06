import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { Avatar } from '../lib/respectre'
import '../lib/respectre.css'

const EX_URL = 'https://picturepan2.github.io/spectre/img/avatar-1.png'

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Avatar
      size={select('Sizes', ['xs', 'sm', 'lg', 'xl'], 'xl')}
      chars={text('Chars', 'SP')}
    />
  ))
  .add('with image', () => (
    <Avatar
      size={select('Sizes', ['xs', 'sm', 'lg', 'xl'], 'xl')}
      image={text('Image Url', EX_URL)}
    />
  ))

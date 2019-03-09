import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
  color,
} from '@storybook/addon-knobs'
import { Image } from '../lib/respectre'
import '../lib/respectre.css'

const EX_URL =
  'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

const Container = ({ width, height, background, children }) => (
  <div style={{ width: width, height: height, background: background }}>
    {children}
  </div>
)
storiesOf('Media', module)
  .addDecorator(withKnobs)
  .add('Image', () => (
    <Container
      width={number('Container Width', 300)}
      height={number('Container Height', 300)}
      background={color('Container Background', '#ccc')}
    >
      <Image
        src={text('Image Url', EX_URL)}
        fit={select(
          'Fits',
          {
            Default: '',
            Contain: 'contain',
            Cover: 'cover',
          },
          ''
        )}
        responsive={boolean('Responsive', true)}
      />
    </Container>
  ))

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
import { Image, Figure, Video } from '../lib/respectre'
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
      width={number('Container Width', 450)}
      height={number('Container Height', 330)}
      background={color('Container Background', 'rgb(255, 242, 235)')}
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
  .add('Figure', () => (
    <Container
      width={number('Container Width', 400)}
      height={number('Container Height', 320)}
      background={color('Container Background', 'rgb(255, 242, 235)')}
    >
      <Figure>
        <Figure.Image
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
        <Figure.Caption>This is a awesome image</Figure.Caption>
      </Figure>
    </Container>
  ))
  .add('Video', () => (
    <Container
      width={number('Container Width', 400)}
      height={number('Container Height', 400)}
      background={color('Container Background', 'rgb(255, 242, 235)')}
    >
      <Video
        ratio={select(
          'Ratios',
          {
            '16:9': '16:9',
            '1:1': '1:1',
            '4:3': '4:3',
          },
          ''
        )}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/onOEns_MnC4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Video>
    </Container>
  ))

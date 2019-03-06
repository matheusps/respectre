import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '../lib/respectre'
import '../lib/respectre.css'

const EX_URL = 'https://picturepan2.github.io/spectre/img/avatar-1.png'

storiesOf('Avatar', module)
  .add('with text', () => (
    <Fragment>
      <Avatar size="xs" chars="XS" />
      <Avatar size="sm" chars="SM" />
      <Avatar size="lg" chars="LG" />
      <Avatar size="xl" chars="XL" />
    </Fragment>
  ))
  .add('with image', () => (
    <Fragment>
      <Avatar size="xs" image={EX_URL} />
      <Avatar size="sm" image={EX_URL} />
      <Avatar size="lg" image={EX_URL} />
      <Avatar size="xl" image={EX_URL} />
    </Fragment>
  ))

import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from '../lib/respectre'
import '../lib/respectre.css'

const imageSource =
  'https://static1.squarespace.com/static/58817d60d2b85782338743f1/t/59acb965f9a61e6ef12a8021/1504491926588/gis+header+1.jpg?format=1500w'

storiesOf('Card', module)
  .add('with text', () => (
    <Card style={{ width: 300, height: 400 }}>
      <Card.Image src={imageSource} />
      <Card.Header>
        <Card.Header.Title modifiers="h5">My title</Card.Header.Title>
        <Card.Header.Subtitle modifiers="text-gray">
          My subtitle
        </Card.Header.Subtitle>
      </Card.Header>
      <Card.Body>This describes my card body</Card.Body>
      <Card.Footer>
        <Button>Click me, dude</Button>
      </Card.Footer>
    </Card>
  ))
  .add('with image', () => <Fragment />)

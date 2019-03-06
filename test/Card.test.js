import React from 'react'
import Card from '../src/Components/Card'
import renderer from 'react-test-renderer'

test('Card Matches Snapshot', () => {
  const component = renderer.create(
    <Card>
      <Card.Image src="https://static1.squarespace.com/static/58817d60d2b85782338743f1/t/59acb965f9a61e6ef12a8021/1504491926588/gis+header+1.jpg?format=1500w" />
      <Card.Header>
        <Card.Header.Title modifiers="h5">My title</Card.Header.Title>
        <Card.Header.Subtitle modifiers="text-gray">
          My subtitle
        </Card.Header.Subtitle>
      </Card.Header>
      <Card.Body>This describes my card body</Card.Body>
      <Card.Footer>
        <span>Footer</span>
      </Card.Footer>
    </Card>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

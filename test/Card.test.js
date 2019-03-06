import React from 'react'
import Card from '../src/Components/Card'
import renderer from 'react-test-renderer'

describe('Card', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(
        <Card>
          <Card.Image src="testing" />
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
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

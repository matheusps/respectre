import React from 'react'
import Button from '../src/Components/Button'
import renderer from 'react-test-renderer'

test('Button Matches Snapshot', () => {
  const component = renderer.create(<Button size="lg">Button Test</Button>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

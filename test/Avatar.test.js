import React from 'react'
import Avatar from '../src/Components/Avatar'
import renderer from 'react-test-renderer'

test('Avatar Matches Snapshot', () => {
  const component = renderer.create(<Avatar size="xl" chars="XL" />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

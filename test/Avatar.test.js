import React from 'react'
import Avatar from '../src/Components/Avatar'
import renderer from 'react-test-renderer'

describe('Avatar', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Avatar size="xl" chars="XL" />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should render image correctly', () => {
    const withImage = renderer
      .create(<Avatar size="xl" image="testing" />)
      .toJSON()
    const withoutImage = renderer
      .create(<Avatar size="xl" chars="XL" />)
      .toJSON()

    expect(withImage.children).toHaveLength(1)
    expect(withImage.children[0].type).toEqual('img')
    expect(withoutImage.children).toBeNull
  })
})

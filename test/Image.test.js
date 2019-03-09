import React from 'react'
import Image from '../src/Components/Image'
import renderer from 'react-test-renderer'
import { classNames } from 'classnames'

describe('Image', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(<Image src="testing" responsive fit="contain" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should not have any children', () => {
    const img1 = renderer.create(<Image src="..." />).toJSON()
    const img2 = renderer.create(<Image src="..." responsive />).toJSON()
    const img3 = renderer.create(<Image src="..." fit="cover" />).toJSON()

    expect(img1.children).toBeNull
    expect(img2.children).toBeNull
    expect(img3.children).toBeNull
  })

  it('should have the correct props', () => {
    const img = renderer
      .create(<Image src="." responsive fit="cover" />)
      .toJSON()

    expect(img.props.src).toEqual('.')
    expect(img.props.className).toContain('img-responsive')
    expect(img.props.className).toContain('img-fit-cover')
  })
})

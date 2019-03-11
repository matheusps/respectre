import React from 'react'
import renderer from 'react-test-renderer'
import Figure from '../src/Components/Figure'

describe('Figure', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Figure />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot with image', () => {
    const component = renderer
      .create(
        <Figure>
          <Figure.Image src="testing" />
        </Figure>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot with caption', () => {
    const component = renderer
      .create(
        <Figure>
          <Figure.Caption>Testing</Figure.Caption>
        </Figure>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot with image and caption', () => {
    const component = renderer
      .create(
        <Figure>
          <Figure.Image src="testing" />
          <Figure.Caption>Testing</Figure.Caption>
        </Figure>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

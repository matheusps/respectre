import React from 'react'
import Label from '../src/Components/Label'
import renderer from 'react-test-renderer'

describe('Label', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Label />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot with props', () => {
    const component = renderer
      .create(
        <Label className="testing" theme="primary" style={{ float: 'left' }} />
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should have the correct props', () => {
    const component = renderer
      .create(
        <Label
          className="testing"
          theme="primary"
          rounded
          style={{ float: 'left' }}
        />
      )
      .toJSON()

    expect(component.props.className).toContain('testing')
    expect(component.props.className).toContain('label')
    expect(component.props.className).toContain('label-primary')
    expect(component.props.className).toContain('label-rounded')
    expect(component.props.style).toEqual({ float: 'left' })
  })
})

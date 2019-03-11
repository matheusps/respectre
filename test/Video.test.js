import React from 'react'
import Video from '../src/Components/Video'
import renderer from 'react-test-renderer'

describe('Video', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Video src="testing" />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot with props', () => {
    const ratio169 = renderer
      .create(<Video src="testing" ratio="16:9" />)
      .toJSON()
    const ratio11 = renderer
      .create(<Video src="testing" ratio="1:1" />)
      .toJSON()
    const ratio43 = renderer
      .create(<Video src="testing" ratio="4:3" />)
      .toJSON()

    expect(ratio169).toMatchSnapshot()
    expect(ratio11).toMatchSnapshot()
    expect(ratio43).toMatchSnapshot()
  })

  it('should match snapshot with children', () => {
    const component = renderer
      .create(
        <Video>
          <iframe />
        </Video>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

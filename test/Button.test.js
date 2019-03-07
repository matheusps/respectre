import React from 'react'
import Button from '../src/Components/Button'
import renderer from 'react-test-renderer'

describe('Button', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(
        <Button size="lg" onClick={() => console.log('testing')}>
          Button Test
        </Button>
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

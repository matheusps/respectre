import React, { Component } from 'react'
import { render } from 'react-dom'

/** Only Demo */
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-exp.css'
import 'spectre.css/dist/spectre-icons.css'

/** Usages */
import ButtonUsage from './usages/Button'
import AvatarUsage from './usages/Avatar'
import CardUsage from './usages/Card'

class Demo extends Component {
  render() {
    return (
      <div>
        <ButtonUsage title="Button Usage" id="button-usage" />
        <AvatarUsage title="Avatar Usage" id="avatar-usage" />
        <CardUsage title="Card Usage" id="card-usage" />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))

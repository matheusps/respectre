import React, {Component} from 'react'
import {render} from 'react-dom'

import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-exp.css'
import 'spectre.css/dist/spectre-icons.css'

import { Avatar } from '../../src/Components';
const avatarUrl = "https://picturepan2.github.io/spectre/img/avatar-1.png"

class Demo extends Component {
  render() {
    return <div>
      <h1>respectre Demo</h1>
      <Avatar size='lg' chars="LG" background='dark' />
      <Avatar size='xl' image={avatarUrl} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

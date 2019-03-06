import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/Avatar')
}

configure(loadStories, module)

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Image from '../Image'
import FigCaption from './FigCaption'

const Figure = ({ className, children }) => {
  const figureClasses = classNames(className, 'figure')
  return <figure className={figureClasses}>{children}</figure>
}

Figure.Image = Image
Figure.Caption = FigCaption

Figure.propTypes = {
  /** Aditional css classes */
  className: PropTypes.string,
}

export default Figure

import React from 'react'
import CardTitle from './Title'
import CardSubtitle from './Subtitle'
import Proptypes from '../Proptypes'

const CardHeader = ({ children, modifiers, ...props }) => (
  <div className={`card-header ${modifiers}`} {...props}>
    {children}
  </div>
)

CardHeader.Title = CardTitle
CardHeader.Subtitle = CardSubtitle

CardHeader.propTypes = Proptypes

export default CardHeader

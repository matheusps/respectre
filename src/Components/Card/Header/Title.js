import React from 'react'
import Proptypes from '../Proptypes'

const CardTitle = ({ modifiers, children, ...props }) => (
  <div className={`card-title ${modifiers}`} {...props}>
    {children}
  </div>
)

CardTitle.propTypes = Proptypes

export default CardTitle

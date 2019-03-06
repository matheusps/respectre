import React from 'react'
import Proptypes from './Proptypes'

const CardFooter = ({ children, modifiers, ...props }) => (
  <div className={`card-footer ${modifiers}`} {...props}>
    {children}
  </div>
)

CardFooter.propTypes = Proptypes

export default CardFooter

import React from 'react'
import Proptypes from '../../Proptypes'

const CardSubtitle = ({ modifiers, children, ...props }) => (
    <div className={`card-title ${modifiers}`} {...props}>{ children }</div>
)

CardSubtitle.propTypes = Proptypes

export default CardSubtitle
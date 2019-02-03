import React from 'react'
import Proptypes from '../Proptypes'

const CardImage = ({ src, modifiers, children, ...props }) => (
    <div className={`card-image ${modifiers}`} {...props}>
        <img src={src} className="img-responsive" />
    </div>
)

CardImage.propTypes = Proptypes

export default CardImage
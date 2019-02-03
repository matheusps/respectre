import React from 'react'
import Proptypes from '../Proptypes'

const CardBody = ({ children, modifiers, ...props }) => (
    <div className={`card-body ${modifiers}`} {...props} >
        { children }
    </div>
)

CardBody.propTypes = Proptypes

export default CardBody
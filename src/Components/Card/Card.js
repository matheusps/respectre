import React from 'react'
import PropTypes from './Proptypes'
import CardHeader from './Header';
import CardBody from './CardBody';
import CardImage from './CardImage';
import CardFooter from './CardFooter';

const Card = ({ children, modifiers, ...props }) => (
    <div className={`card ${modifiers}`} {...props}>
        { children }
    </div>
)

Card.Header = CardHeader
Card.Body = CardBody
Card.Image = CardImage
Card.Footer = CardFooter

Card.propTypes = PropTypes

export default Card
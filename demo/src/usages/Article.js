import React from 'react'

const style = {
    margin: 50
}

const Article = ({ id, title, children }) => (
    <article id={id} style={style}>
        <h2>{title}</h2>
        { children }
    </article>
)

export default Article
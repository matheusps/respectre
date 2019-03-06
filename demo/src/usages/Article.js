import React from 'react'

const Article = ({ id, title, children }) => (
  <article id={id}>
    <h2>{title}</h2>
    {children}
  </article>
)

export default Article

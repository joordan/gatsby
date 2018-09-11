import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello!</h1>
    <p>Getting to know Gatsby and Graphql.</p>
    <p>Check out my <a href="https://jordanr.es">website</a></p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

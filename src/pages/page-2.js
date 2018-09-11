import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hello from the other side</h1>
    <p>Check out <a href="https://xn--yckq0jzb2b.xn--tckwe">my other website</a> </p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage

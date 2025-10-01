import * as React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <link href='https://fonts.googleapis.com/css?family=UnifrakturMaguntia' rel='stylesheet'></link>
    <link href="https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap" rel="stylesheet"></link>

    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>

  </header>
)

export default Header

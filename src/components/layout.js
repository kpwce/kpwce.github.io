/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const headerLinks = [
    {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "Research",
    url: "/research",
  },
  {
    text: "Teaching",
    url: "/teaching",
  },

]

  return (
    <>
      <hr class="header-line"/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <hr class="header-line"/>


      <ul className="header-nav">
      {headerLinks.map(link => (
        <li key={link.url}>
          <Link title={link.text} className="header-bold" to={link.url}>{link.text}</Link>
        </li>
      ))}
    </ul>


      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; kpwce
        </footer>
        
      </div>
      <hr class="header-line"/>
    </>
  )
}

export default Layout

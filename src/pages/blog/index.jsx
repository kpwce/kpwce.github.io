import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"

import BlogBlock from "../../components/blog-block"


const blogList = [
  {
    title: "What I've been reading",
    path: "/reading-list",
    description: "Simple list of books I've been reading and found worthwhile.",
  },
  {
    title: "Designing this website",
    path: "/building-with-gatsby",
    description: "The concepts behind this site, from both historical and technical perspectives."
  },
  {
    title: "Reflection on the college triple major",
    path: "/triple-major",
    description: "I get a lot of questions about my academic path in undergrad, so I've decided to write about it."
  },
    {
    title: "Dibujos de tiza",
    path: "/dibujos-de-tiza",
    description: "Los estudios matemáticos son obras de arte."
  },
      {
    title: "Una carta de presentación escrita por Lázaro de Tormes",
    path: "/carta-de-presentacion-lazaro",
    description: "Imaginamos qué escribirá Lázaro de Tormes en el siglo XVI."
  }
]


const BlogPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>

    <div className="three-col-grid">
      <div>
        <h1>Blog</h1>

        <p>This page contains commentary for a subset of the projects I work on and many of my little thoughts that I thought were worth sharing.</p>

        <p>Many of these entries are lists associated with a topic or idea subject to future updates. They help me organize what I've read and serve as a resource for others who might be interested.</p>

        <h2>Tags</h2>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/" className="redirect">☞ Go back to the homepage</Link>
      </div>

      <div className="two-col-grid">
        {blogList.map(item => (
          <BlogBlock title={item.title} description={item.description} path={item.path} />
        ))}
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
        totalCount
      }
    }
  }
`

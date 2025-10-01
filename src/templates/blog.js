import React from "react"
import { graphql } from "gatsby"


// katex rendering
require(`katex/dist/katex.min.css`)

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <article>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
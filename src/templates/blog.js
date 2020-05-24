import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const BlogTemplate = ({ data: { mdx: blog } }) => (
  <Layout>
    <h1 className="page-header">{blog.frontmatter.title}</h1>
    <p>Posted by {blog.frontmatter.author}</p>
    <MDXRenderer>{blog.body}</MDXRenderer>
    <Link to="/blogs">&larr; back to all posts</Link>
  </Layout>
)

export default BlogTemplate

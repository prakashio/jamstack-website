import React from "react"
import { Link } from "gatsby"
import { Col } from "react-grid-system"

const BlogPreview = ({ blog }) => (
  <Col sm={4}>
    <article>
      <Link to={blog.slug}></Link>
      <div>
        <h3>
          <Link to={blog.slug}>{blog.title}</Link>
        </h3>
        <p>{blog.excerpt}</p>
        <Link to={blog.slug}>Read this Post &rarr;</Link>
      </div>
    </article>
  </Col>
)

export default BlogPreview

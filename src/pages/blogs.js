import React from "react"
import Layout from "../components/layout"
import useBlogs from "../hooks/use-blogs"
import Blog from "../components/blog"
import { Row, Col } from "react-grid-system"

export default () => {
  const blogs = useBlogs()

  return (
    <Layout>
      <Row>
        <Col sm={12}>
          <h1 className="page-header">Blogs</h1>
        </Col>
        {blogs.map(blog => (
          <Blog key={blog.slug} blog={blog} />
        ))}
      </Row>
    </Layout>
  )
}

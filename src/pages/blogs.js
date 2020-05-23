import React from "react"
import Layout from "../components/layout"
import useBlogs from "../hooks/use-blogs"
import Blog from "../components/blog"
import { Row } from "react-grid-system"

export default () => {
  const blogs = useBlogs()

  return (
    <Layout>
      <h1>Blogs</h1>
      <Row>
        {blogs.map(blog => (
          <Blog key={blog.slug} blog={blog} />
        ))}
      </Row>
    </Layout>
  )
}

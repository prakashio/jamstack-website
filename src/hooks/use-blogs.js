import { graphql, useStaticQuery } from "gatsby"

const useBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            author
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(blog => ({
    title: blog.frontmatter.title,
    author: blog.frontmatter.author,
    slug: blog.frontmatter.slug,
    excerpt: blog.excerpt,
  }))
}

export default useBlogs

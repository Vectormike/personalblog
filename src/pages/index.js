import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, useStaticQuery} from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
          timeToRead
          html
          excerpt
        }
      }
    }
  }`)

  const posts = data.allMarkdownRemark.edges
  
  return (
  <Layout>
    <SEO title="Home" />
      {posts.map((edges) => {
        return (
          <div>
          <h3>
            {edges.node.frontmatter.title}
          </h3>
          <small>
            {edges.node.frontmatter.date} . {edges.node.timeToRead} min read
          </small>
          <p>
            {edges.node.excerpt}
          </p>
        </div>
        )

      })}      
  
  </Layout>
  )
}
  
export default IndexPage

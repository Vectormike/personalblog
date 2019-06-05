import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, useStaticQuery, Link} from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges{
        node{
          frontmatter{
            title
            date(formatString: "Do MMMM, YYYY")
          }
          fields{
            slug
          }
          timeToRead
          html
          excerpt(pruneLength: 250)
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
            <Link to={edges.node.fields.slug}>
            {edges.node.frontmatter.title}
            </Link>
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

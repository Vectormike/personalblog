import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, useStaticQuery, Link} from 'gatsby';
import BlogStyles from '../styles/blog.module.scss';


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
          <div className={BlogStyles.posts}>
            <Link to={edges.node.fields.slug}>
              <h3>{edges.node.frontmatter.title}</h3>
            </Link>  
              <small>
                {edges.node.frontmatter.date} • {edges.node.timeToRead} min read
              </small>
              <p>{edges.node.excerpt}</p>
        </div>
        )
      })}      
  
  </Layout>
  )
}
  
export default IndexPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import BlogStyles from "../styles/blog.module.scss"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "Do MMMM, YYYY")
            }
            fields {
              slug
            }
            timeToRead
            html
            excerpt(pruneLength: 250)
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            height: "90px",
            width: "100px",
            borderRadius: "19px",
            paddingRight: "20px",
          }}
          src="https://res.cloudinary.com/vectormike/image/upload/v1554552347/6edfcea6-0523-4be3-9d0e-ea49fc1248d5.png"
        />

        <p>
          Personal blog by{" "}
          <a
            style={{
              color: "rgb(23, 131, 226)",
              textDecoration: "none",
            }}
            href="https://twitter.com/Vectormike_"
          >
            Victor Jonah
          </a>
        </p>
      </div>
      {posts.map(edges => {
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

import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BlogPostStyles from "../styles/blog-post.module.scss"

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const { title } = post.frontmatter
  const { slug } = post.fields

  return (
    <Layout>
      <SEO title={title} />

      <h1 className={BlogPostStyles.header}>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <div>
        <div
          style={{
            float: "left",
            marginRight: "200px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <li>
              <a
                style={{
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/search?q=Vectormike_${slug}`}
              >
                Discuss with me on Twitter
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            float: "right",
            marginLeft: "200px",
          }}
        >
          <FacebookShareButton
            title={title}
            style={{ padding: `0 0.3rem` }}
            url={`https://www.vectormike.codes/${slug}`}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            title={title}
            style={{ padding: `0 0.3rem` }}
            url={`https://www.vectormike.codes/${slug}`}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton
            title={title}
            style={{ padding: `0 0.3rem` }}
            url={`https://www.vectormike.codes/${slug}`}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

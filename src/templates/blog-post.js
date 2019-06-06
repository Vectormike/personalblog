import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from "../components/seo"

 const BlogPost = ({data}) => {
    const post = data.markdownRemark;
    const { title } = post.frontmatter;

    return (
            <Layout>
                <SEO title={title}/>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Layout>
    
    )
 }

 export default BlogPost;

 export const query = graphql`
 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
       title     
    }
  }
}
`
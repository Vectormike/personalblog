import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import BlogPostStyles from '../styles/blog-post.module.scss';

import {
   FacebookShareButton,
   TwitterShareButton,
   WhatsappShareButton,
   FacebookIcon,
   TwitterIcon,
   WhatsappIcon
} from 'react-share';   

 const BlogPost = ({data}) => {
    const post = data.markdownRemark;
    const { title } = post.frontmatter;
    const { slug } = post.fields;

    return (
            <Layout>
                <SEO title={title}/>
                
                <h1 className={BlogPostStyles.header}>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <div style={
                  {display: 'flex'}
                }>
                  <FacebookShareButton
                     title={title}
                     url={`https://heuristic-poitras-bf2cbd.netlify.com//${slug}`}
                  >   
                     <FacebookIcon size={40} round={true}/>
                  </FacebookShareButton>
                  <TwitterShareButton
                     title={title}
                     url={`https://heuristic-poitras-bf2cbd.netlify.com//${slug}`}
                  >   
                     <TwitterIcon size={40} round={true}/>
                  </TwitterShareButton> 
                  <WhatsappShareButton
                     title={title}
                     url={`https://heuristic-poitras-bf2cbd.netlify.com//${slug}`}
                  >   
                     <WhatsappIcon size={40} round={true}/>
                  </WhatsappShareButton>
                </div>
            </Layout>
    
    )
 }

 export default BlogPost;

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
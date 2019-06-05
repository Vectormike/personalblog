 import React from 'react';
 import Layout from '../components/layout';
import { graphql } from 'gatsby';

 const BlogPost = ({data}) => {
    const post = data.markdownRemark;
    const { title } = post.frontmatter;

    return (
        <div>
            <Layout>
                <div>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </Layout>
        </div>
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
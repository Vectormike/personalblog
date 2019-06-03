/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        console.log(slug, '@@@@@@@@')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}  

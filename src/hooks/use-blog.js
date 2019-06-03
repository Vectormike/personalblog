// import {useStaticQuery, graphql} from 'gatsby';

// export const useBlog = () => {
//   const { allMarkdownRemark } = useStaticQuery(
//       graphql`
//           query {
//               allMarkdownRemark{
//               edges{
//                   node{
//                       frontmatter{
//                           title
//                           date
//                       }
//                   timeToRead
//                   html
//                   excerpt
//                   }
//                 }
//               }
//             }
        
//           `)
//     return allMarkdownRemark.edges;
// }
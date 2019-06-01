/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
// import "../styles/index.scss"
import LayoutStyles from '../styles/layout.module.scss';

const Layout = ({ children }) => {
  const title = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
      <div>
        <Header siteTitle={title.site.siteMetadata.title} />
        <div className={LayoutStyles.container}>
          <main>{children}</main>
          <Footer siteAuthor={author.site.siteMetadata.author}/>
        </div>
      </div>
    

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

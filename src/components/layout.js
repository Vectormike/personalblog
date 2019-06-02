/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { useSiteMetadata } from "../use-site-metadata"

import Header from "./header"
import Footer from "./footer"
// import "../styles/index.scss"
import LayoutStyles from '../styles/layout.module.scss';

const Layout = ({ children }) => {
  const { title, author} = useSiteMetadata();

  return (
      <div>
        <Header siteTitle={title} />
        <div className={LayoutStyles.container}>
          <main>{children}</main>
          <Footer siteAuthor={author}/>
        </div>
      </div>
    ) 
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useBlog } from "../hooks/use-blog"

const IndexPage = () => {
  const {node} = useBlog();
  
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      {console.log(node)}
      <p>{node}</p>    
    </div>
  </Layout>
  )
}
  
export default IndexPage

import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go Home</Link>
  </div>
)

export default NotFoundPage

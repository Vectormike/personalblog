import React from "react"

const Footer = ({siteAuthor}) => {
  return (
    <div>
      <p>Created by {siteAuthor}, © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer

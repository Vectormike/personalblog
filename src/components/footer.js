import React from "react"

const Footer = ({siteAuthor}) => {
  return (
    <div>
      <p>Built by {siteAuthor} © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer

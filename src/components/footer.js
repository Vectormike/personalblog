import React from "react"
import footerStyles from '../styles/footer.module.scss';


const Footer = ({siteAuthor}) => {
  return (
    <div className={footerStyles.footer}>
      <p>Built by {siteAuthor} © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer

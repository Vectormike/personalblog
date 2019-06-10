import React from "react"
import { Link } from 'gatsby';
import footerStyles from '../styles/footer.module.scss';


const Footer = ({siteAuthor}) => {
  return (
    <div className={footerStyles.footer}>
      <p>Built by {siteAuthor} © {new Date().getFullYear()}</p>
      <p>
        <Link>Twitter</Link>
        <Link>Github</Link>
        <Link>Facebook</Link>
      </p>
    </div>
  )
}

export default Footer

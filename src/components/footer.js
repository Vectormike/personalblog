import React from "react"
import { Link } from "gatsby"
import footerStyles from "../styles/footer.module.scss"

const Footer = ({ siteAuthor }) => {
  return (
    <div className={footerStyles.footer}>
      <p>
        Built by {siteAuthor} © {new Date().getFullYear()}
      </p>
      <ul className={footerStyles.lists}>
        <li>
          <a href="https://twitter.com/Vectormike_">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/Vectormike40">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/victor-jonah-abb1a1120/">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer

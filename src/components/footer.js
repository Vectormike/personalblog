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
          <Link href="https://twitter.com/Vectormike_">
            Twitter
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Vectormike40">
            Github
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/victor-jonah-abb1a1120/">
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer

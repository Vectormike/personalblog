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
            <i className="fab fa-twitter" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Vectormike40">
            <i className="fab fa-github" />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/victor.jonah">
            <i className="fab fa-facebook" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer

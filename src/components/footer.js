import React from "react"
import footerStyles from "../styles/footer.module.scss"

const Footer = ({ siteAuthor }) => {
  return (
    <div className={footerStyles.footer}>
      <p>
        Built by {siteAuthor} © {new Date().getFullYear()}
      </p>
      <ul className={footerStyles.lists}>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Vectormike_"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Vectormike"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/victor-jonah-abb1a1120/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer

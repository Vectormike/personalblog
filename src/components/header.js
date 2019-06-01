import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderStyles from '../styles/header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.header}>
    <div>
      <h1>
        <Link
          className={HeaderStyles.title}
          to="/"
          >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

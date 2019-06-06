import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderStyles from '../styles/header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.header}>
      <h1>
        <Link
          to="/"
          >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

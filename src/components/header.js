import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import HeaderStyles from '../styles/header.module.scss';

const Header = ({ siteTitle }) => (
  <Link className={HeaderStyles.header}
    to="/"
    >
    <header className={HeaderStyles.header}>
      {siteTitle}
    </header>
  </Link>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

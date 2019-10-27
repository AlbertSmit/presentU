import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

import './header.scss'

const logo = 'http://presentu.nl/images/Middel-10d-p-500.png';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className='header'
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className='logo' style={{ margin: 0 }}>
        <Link
          to="/"
          className="link">
          <img src={logo}></img>
        </Link>
      </div>
      <Menu />
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

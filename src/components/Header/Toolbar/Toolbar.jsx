import React from "react"
import { Link } from "gatsby"

import "./index.scss"

import Hamburger from "components/Header/Hamburger/Hamburger.jsx"

const Toolbar = props => {
  const { openDrawer } = props

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <Hamburger click={openDrawer} />
        </div>
        <Link className="toolbar__left-icon" to="/">
          <p>About</p>
        </Link>
        <div className="toolbar__logo">
          <p>Roy Chan</p>
        </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/education/">
                <p>Education</p>
              </Link>
            </li>
            <li>
              <Link to="/experience/">
                <p>Experience</p>
              </Link>
            </li>
            <li>
              <Link to="/projects/">
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link to="/contact/">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar

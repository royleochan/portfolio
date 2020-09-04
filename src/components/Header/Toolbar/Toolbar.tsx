import React from "react"
import { Link } from "gatsby"

import "./index.scss"

import Hamburger from "src/components/Header/Hamburger/Hamburger"

interface Props {
  page: string
  openDrawer: () => void
}

const Toolbar: React.FC<Props> = props => {
  const { openDrawer, page } = props

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <Hamburger click={openDrawer} />
        </div>
        <div className="toolbar__left-icon">
          <Link activeClassName="toolbar__left-icon-active" to="/">
            <p>About</p>
          </Link>
        </div>
        <div className={`toolbar__logo-${page}`}>
          <p>Roy Chan</p>
        </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li className="education">
              <Link to="/education/" activeClassName="education-link">
                <p>Education</p>
              </Link>
            </li>
            <li className="experience">
              <Link to="/experience/" activeClassName="experience-link">
                <p>Experience</p>
              </Link>
            </li>
            <li className="projects">
              <Link to="/projects/" activeClassName="projects-link">
                <p>Projects</p>
              </Link>
            </li>
            <li className="contact">
              <Link to="/contact/" activeClassName="contact-link">
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

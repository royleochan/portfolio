import React from "react"
import { Link } from "gatsby"

import "./index.scss"

const SideDrawer = props => {
  const { show } = props
  const drawerClasses = show ? "side-drawer open" : "side-drawer"

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">
            <p>About</p>
          </Link>
        </li>
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
    </nav>
  )
}

export default SideDrawer

import React, { useState } from "react"

import Toolbar from "components/Header/Toolbar/Toolbar.jsx"
import Footer from "components/Footer/Footer.jsx"
import Backdrop from "components/Backdrop/Backdrop.jsx"
import SideDrawer from "components/Header/SideDrawer/SideDrawer.jsx"

const Experience = props => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler = () => {
    toggleDrawer()
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar openDrawer={toggleDrawer} />
      {isDrawerOpen && <SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main style={{ marginTop: "6rem" }}>
        <h1>Experience</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Experience

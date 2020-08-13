import React, { useState } from "react"

import "styles/pages/thanks.scss"

import Toolbar from "components/Header/Toolbar/Toolbar.jsx"
import Footer from "components/Footer/Footer.jsx"
import Backdrop from "components/Backdrop/Backdrop.jsx"
import SideDrawer from "components/Header/SideDrawer/SideDrawer.jsx"

const Thanks = props => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler = () => {
    toggleDrawer()
  }

  return (
    <div className="thanks-page">
      <Toolbar openDrawer={toggleDrawer} page="contact" />
      {<SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main className="main">
        <div className="header">
          <h1>Thank you!</h1>
          <p>
            I will get back to you as soon as possible! In the meantime, feel
            free to visit my social media and look out for an email by
            royleochan@gmail.com. Thank you for getting in touch :)
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Thanks

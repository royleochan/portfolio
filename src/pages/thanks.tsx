import React, { useState } from "react"

import "styles/pages/thanks.scss"

import Toolbar from "src/components/Header/Toolbar/Toolbar"
import Footer from "src/components/Footer/Footer"
import Backdrop from "src/components/Backdrop/Backdrop"
import SideDrawer from "src/components/Header/SideDrawer/SideDrawer"

const Thanks: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawer: () => void = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler: () => void = () => {
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

import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"

import "styles/pages/education.scss"
import MODULES from "src/data/modules"

import Toolbar from "components/Header/Toolbar/Toolbar.jsx"
import Footer from "components/Footer/Footer.jsx"
import Backdrop from "components/Backdrop/Backdrop.jsx"
import SideDrawer from "components/Header/SideDrawer/SideDrawer.jsx"
import ModuleCard from "components/Card/ModuleCard/ModuleCard.jsx"
import NusLogo from "src/assets/images/nus_logo.png"

const Education = props => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const computingMods = MODULES.filter(module => module.type === "CS")
  const mathMods = MODULES.filter(module => module.type === "MA")
  const bizMods = MODULES.filter(module => module.type === "BIZ")
  const geMods = MODULES.filter(module => module.type === "GE")
  const commsMods = MODULES.filter(module => module.type === "COM")

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler = () => {
    toggleDrawer()
  }

  return (
    <div className="education-page">
      <Toolbar openDrawer={toggleDrawer} page="education" />
      {<SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main className="main">
        <img src={NusLogo} alt="nus" className="image" />
        <h3>Coursework</h3>
        <Grid container spacing={3} className="grid-container">
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <ModuleCard title="Computing" body={computingMods} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <ModuleCard title="Business" body={bizMods} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <ModuleCard title="Math" body={mathMods} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <ModuleCard title="General Electives" body={geMods} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <ModuleCard title="Communication" body={commsMods} />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

export default Education

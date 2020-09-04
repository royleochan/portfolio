import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"

import "styles/pages/education.scss"
import MODULES from "src/data/modules"

import Toolbar from "src/components/Header/Toolbar/Toolbar"
import Footer from "src/components/Footer/Footer"
import Backdrop from "src/components/Backdrop/Backdrop"
import SideDrawer from "src/components/Header/SideDrawer/SideDrawer"
import ModuleCard from "src/components/Card/ModuleCard/ModuleCard"
import NusLogo from "src/assets/images/nus_logo.png"
import Module from "@/models/module"

const Education: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const computingMods: Array<Module> = MODULES.filter(
    (module: Module) => module.type === "CS"
  )
  const mathMods: Array<Module> = MODULES.filter(
    (module: Module) => module.type === "MA"
  )
  const bizMods: Array<Module> = MODULES.filter(
    (module: Module) => module.type === "BIZ"
  )
  const geMods: Array<Module> = MODULES.filter(
    (module: Module) => module.type === "GE"
  )
  const commsMods: Array<Module> = MODULES.filter(
    (module: Module) => module.type === "COM"
  )

  const toggleDrawer: () => void = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler: () => void = () => {
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

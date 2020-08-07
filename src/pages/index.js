import React, { useState } from "react"

import "styles/pages/about.scss"
import ProfilePicture from "src/assets/images/roy.png"
import INTERESTS from "src/data/interests"
import SKILLS from "src/data/skills"

import Grid from "@material-ui/core/Grid"

import Toolbar from "components/Header/Toolbar/Toolbar.jsx"
import Footer from "components/Footer/Footer.jsx"
import Backdrop from "components/Backdrop/Backdrop.jsx"
import SideDrawer from "components/Header/SideDrawer/SideDrawer.jsx"
import Card from "components/Card/Card.jsx"

const About = props => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler = () => {
    toggleDrawer()
  }

  return (
    <div className="page">
      <Toolbar openDrawer={toggleDrawer} page="about" />
      {isDrawerOpen && <SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main style={{ marginTop: "6rem", overflow: "hidden" }}>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className="image-container">
                <img src={ProfilePicture} alt="roy" className="image" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <div className="info-container">
                <div className="about-container">
                  <p>
                    Year 2 Student at{" "}
                    <p className="university-text">
                      National University of Singapore
                    </p>
                  </p>
                  <p>
                    Double Degree in <h3>Computer Science</h3> (Home) and{" "}
                    <h3>Business Administration</h3> (Second)
                  </p>
                </div>
              </div>
              <Grid container spacing={3}>
                <div className="grid">
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card title="Interests" body={INTERESTS} type="interest" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card title="Skills" body={SKILLS} type="skill" />
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
      <Footer page="about" />
    </div>
  )
}

export default About

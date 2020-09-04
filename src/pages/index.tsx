import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "styles/pages/about.scss"
import INTERESTS from "src/data/interests"
import SKILLS from "src/data/skills"

import Grid from "@material-ui/core/Grid"

import Toolbar from "src/components/Header/Toolbar/Toolbar"
import Footer from "src/components/Footer/Footer"
import Backdrop from "src/components/Backdrop/Backdrop"
import SideDrawer from "src/components/Header/SideDrawer/SideDrawer"
import Card from "src/components/Card/BasicCard/Card"

const About = (props: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawer: () => void = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler: () => void = () => {
    toggleDrawer()
  }

  return (
    <div className="about-page">
      <Toolbar openDrawer={toggleDrawer} page="about" />
      {<SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main style={{ marginTop: "6rem", overflow: "hidden" }}>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4} lg={4} className="picture-grid">
              <div className="image-container">
                <Img
                  fluid={props.data.imageOne.childImageSharp.fluid}
                  alt="profile"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <div className="info-container">
                <div className="about-container">
                  <p>
                    Year 2 Student at{" "}
                    <span className="university-text">
                      National University of Singapore
                    </span>
                  </p>
                  <p>
                    Double Degree in{" "}
                    <span className="header-text">Computer Science</span> (Home)
                    and{" "}
                    <span className="header-text">Business Administration</span>{" "}
                    (Second)
                  </p>
                </div>
              </div>
              <Grid container spacing={1}>
                <div className="grid">
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="interest-grid"
                  >
                    <Card title="Interests" body={INTERESTS} type="interest" />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="skill-grid"
                  >
                    <Card title="Skills" body={SKILLS} type="skill" />
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "roy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

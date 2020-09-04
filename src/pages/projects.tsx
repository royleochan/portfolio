import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "styles/pages/projects.scss"
import SWAPIT from "src/data/swapIt"
import SwapItPoster from "src/assets/images/swapit-poster.jpg"

import Toolbar from "src/components/Header/Toolbar/Toolbar"
import Footer from "src/components/Footer/Footer"
import Backdrop from "src/components/Backdrop/Backdrop"
import SideDrawer from "src/components/Header/SideDrawer/SideDrawer"
import CustomCarousel from "src/components/Carousel/CustomCarousel"

const Projects: React.FC = (props: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawer: () => void = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler: () => void = () => {
    toggleDrawer()
  }

  return (
    <div className="projects-page">
      <Toolbar openDrawer={toggleDrawer} page="projects" />
      {<SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main>
        <CustomCarousel images={SWAPIT} cover={SwapItPoster} />
        <div className="info-container">
          <h3>SwapIt</h3>
          <p>
            Developed under{" "}
            <a href="https://orbital.comp.nus.edu.sg/">NUS Orbital Program</a>{" "}
            (Artemis Level)
          </p>
          <p>
            SwapIt is a <strong>mobile application</strong> that provides a
            marketplace-like interface for users to list clothes that they are
            willing to swap as well as search for clothes that they want to
            exchange for. The project aims to{" "}
            <strong>encourage a trend of sustainable fashion</strong> so as to
            reduce wastage. The project is currently undergoing
            commercialisation plans.
          </p>
          <p>Built Using:</p>
          <div className="image-container">
            <Img fixed={props.data.imageOne.childImageSharp.fixed} />
          </div>
          <p>Relevant Links:</p>
          <p>
            <a href="https://youtu.be/8fiWyNYucwk">Video Demo</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "swapit-tech.png" }) {
      childImageSharp {
        fixed(width: 300, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

import React, { useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import "styles/pages/experience.scss"
import EXPERIENCE from "src/data/experience"

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

  const getTimelineElements = () =>
    EXPERIENCE.map(experience => (
      <VerticalTimelineElement key={experience.date} {...experience.props}>
        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {experience.subtitle}
        </h4>
        <p>{experience.content}</p>
      </VerticalTimelineElement>
    ))

  return (
    <div className="experience-page">
      <Toolbar openDrawer={toggleDrawer} page="experience" />
      {<SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main
        style={{ marginTop: "6rem", display: "flex", flexDirection: "column" }}
      >
        <h3 style={{ alignSelf: "center" }}>Experience</h3>
        <VerticalTimeline className="timeline">
          {getTimelineElements()}
        </VerticalTimeline>
      </main>
      <Footer />
    </div>
  )
}

export default Experience

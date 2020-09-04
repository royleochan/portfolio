import React, { useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import "styles/pages/experience.scss"
import EXPERIENCE from "src/data/experience"

import Toolbar from "src/components/Header/Toolbar/Toolbar"
import Footer from "src/components/Footer/Footer"
import Backdrop from "src/components/Backdrop/Backdrop"
import SideDrawer from "src/components/Header/SideDrawer/SideDrawer"

interface Experience {
  props: {
    date: string
    className: string
    contentStyle: { color: string }
    contentArrowStyle: { borderRight: string }
    iconStyle: { background: string; color: string }
    icon: JSX.Element
  }
  title: string
  subtitle: string
  content: string
}

const Experience: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawer: () => void = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler: () => void = () => {
    toggleDrawer()
  }

  const getTimelineElements: () => JSX.Element[] = () =>
    EXPERIENCE.map((experience: Experience) => (
      <VerticalTimelineElement
        key={experience.props.date}
        {...experience.props}
      >
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

import React from "react"

import WorkIcon from "@material-ui/icons/Work"
import SchoolIcon from "@material-ui/icons/School"

const EXPERIENCE = [
  {
    props: {
      date: "Jan 2019 - Apr 2019",
      className: "vertical-timeline-element--work",
      contentStyle: { color: "#343434" },
      contentArrowStyle: { borderRight: "7px solid  rgb(36, 206, 133)" },
      iconStyle: { background: "rgb(36, 206, 133)", color: "#fff" },
      icon: <WorkIcon />,
    },
    title: "Software Engineering Intern",
    subtitle: "Zumata",
    content: "Technologies used: Dialogflow, React, ElasticSearch",
  },
  {
    props: {
      date: "Sept 2019 - May 2020",
      className: "vertical-timeline-element--education",
      contentStyle: { color: "#343434" },
      contentArrowStyle: { borderRight: "7px solid  rgb(161, 96, 251)" },
      iconStyle: { background: "rgb(161, 96, 251)", color: "#fff" },
      icon: <SchoolIcon />,
    },
    title: "Machine Learning Department",
    subtitle: "NUS Fintech Society",
    content: "Technologies used: React, python",
  },
  {
    props: {
      date: "Jun 2020 - July 2020",
      className: "vertical-timeline-element--work",
      contentStyle: { color: "#343434" },
      contentArrowStyle: { borderRight: "7px solid  rgb(36, 206, 133)" },
      iconStyle: { background: "rgb(36, 206, 133)", color: "#fff" },
      icon: <WorkIcon />,
    },
    title: "Full Stack Developer Intern",
    subtitle: "With.Network",
    content: "Technologies used: React, Sass, Django and Django Rest Framework",
  },
  {
    props: {
      date: "July 2020 - Present",
      className: "vertical-timeline-element--education",
      contentStyle: { color: "#343434" },
      contentArrowStyle: { borderRight: "7px solid  rgb(161, 96, 251)" },
      iconStyle: { background: "rgb(161, 96, 251)", color: "#fff" },
      icon: <SchoolIcon />,
    },
    title: "Dev Ops Department",
    subtitle: "NUS Fintech Society",
    content: "",
  },
]

export default EXPERIENCE

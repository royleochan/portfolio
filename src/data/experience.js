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
    content:
      "As an intern in the company's chatbot development team, my highlights include writing a script to automise the deletion of chatbot intents, designing a credit card advisory chatbot which my product manager used to pitch to potential clients, as well as improving chat widget front end appearance for a better user experience. Technologies used: Dialogflow, React, ElasticSearch",
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
    content:
      "Tried implementing an ARIMA Model for time series analysis. Also collaborated with other members on a project with SmartKarma. Took on the role of a frontend developer using React.js & ReCharts library to display results of sentiment analysis. Technologies used: React, python",
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
    content:
      "During my time as a full stack intern at this startup, I mainly developed reusable user interface components using React and extended existing RESTful API functionality using the Django framework. Main features I was building include a CRM console with a drag and drop feature as well as a feature to allow users to connect with each other. Technologies used: React, Sass, Django and Django Rest Framework",
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
    title: "Technical Lead",
    subtitle: "NUS Fintech Society",
    content:
      "Leading a team of 5 developers in the DevOps department to build a new NUS Fintech Society website which will replace the current wix site. The team is in charge of desiging the UI/UX as well as implementing the site. Technologies used: React, NextJS, Sass",
  },
]

export default EXPERIENCE

import React from "react"

import "./index.scss"

const Hamburger = props => {
  const { click } = props

  return (
    <button className="toggle-button" onClick={click}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  )
}

export default Hamburger

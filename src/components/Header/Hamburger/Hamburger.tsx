import React from "react"

import "./index.scss"

interface Props {
  click: () => void
}

const Hamburger: React.FC<Props> = props => {
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

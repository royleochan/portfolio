import React from "react"

import "./index.scss"

const Backdrop = props => {
  const { click } = props

  return (
    <div
      className="backdrop"
      onClick={click}
      onKeyPress={click}
      role="button"
      tabIndex="0"
      aria-label="backdrop"
    ></div>
  )
}

export default Backdrop

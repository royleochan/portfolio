import React from "react"

import "./index.scss"

interface Props {
  click: () => void
}

const Backdrop: React.FC<Props> = props => {
  const { click } = props

  return (
    <div
      className="backdrop"
      onClick={click}
      onKeyPress={click}
      role="button"
      tabIndex={0}
      aria-label="backdrop"
    ></div>
  )
}

export default Backdrop

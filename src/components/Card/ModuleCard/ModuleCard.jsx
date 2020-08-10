import React from "react"

import "./index.scss"

const ModuleCard = props => {
  const { title, body } = props
  return (
    <div className="module-card-container">
      <div className="title-container">
        <h4>{title}</h4>
        {body.map(module => (
          <div>
            <p>
              <strong>{module.moduleCode}</strong>
            </p>
            <p>{module.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModuleCard

import React from "react"

import "./index.scss"

const Card = props => {
  const { title, body, type } = props
  const isInterest = type === "interest"
  const isSkill = type === "skill"

  return (
    <div className="card-container">
      <div className="title-container">
        <h3>{title}</h3>
        {isInterest && body.map(item => <p>{item}</p>)}
        {isSkill &&
          body.map(item => (
            <div className="body-container">
              <img src={item.imageUrl} alt={item.title} className="image" />
              <div className={`${item.identifier}-title`}>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Card
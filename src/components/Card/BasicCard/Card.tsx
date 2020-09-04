import React from "react"

import "./index.scss"

interface Props<T> {
  title: string
  body: Array<T>
  type: string
}

const Card: React.FC<Props<any>> = props => {
  const { title, body, type } = props
  const isInterest = type === "interest"
  const isSkill = type === "skill"

  return (
    <div className="card-container">
      <div className="title-container">
        <h3>{title}</h3>
        {isInterest && body.map(item => <p key={item}>{item}</p>)}
        {isSkill &&
          body.map(item => (
            <div key={item.title} className="body-container">
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

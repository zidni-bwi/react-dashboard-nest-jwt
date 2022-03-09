import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.content.title}</h5>
        <p className="card-text">{props.content.text}</p>
      </div>
    </div>
  )
}

export default Card;

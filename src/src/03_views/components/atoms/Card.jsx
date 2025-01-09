import React from 'react'

function Card({ name }) {
  const cardStyle = {
    width: "6rem",
    aspectRatio: "58 / 89",
    backgroundColor: "#c00606",
    boxShadow: "0 0 6px black",
    border: "0.5rem white solid",
    borderRadius: "0.5rem" 
  }

  return <div style={cardStyle}className="card">{name}</div>;
}

export default Card
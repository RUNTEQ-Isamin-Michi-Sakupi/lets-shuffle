import React from 'react'

const Card = () => {
    const cardStyle = {
        width: "6rem",
        aspectRatio: "58 / 89",
        backgroundColor: "#c00606",
        boxShadow: "0 0 6px black",
        border: "0.5rem white solid",
        borderRadius: "0.5rem"
    }
  return (
    <div style={cardStyle}>Card</div>
  )
}

export default Card
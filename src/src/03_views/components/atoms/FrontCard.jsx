import React from 'react'

function FrontCard({ name, index }) {
  const cardStyle = {
    width: "6rem",
    aspectRatio: "58 / 89",
    backgroundColor: "#c00606",
    boxShadow: "0 0 6px black",
    border: "0.5rem white solid",
    borderRadius: "0.5rem" 
  }

  return <div style={cardStyle} id={index} >{name}</div>;
}

export default FrontCard
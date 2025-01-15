import React from 'react'

function FrontCard({ index,func }) {
  const cardStyle = {
    width: "6rem",
    aspectRatio: "58 / 89",
    backgroundColor: "#c00606",
    boxShadow: "0 0 6px black",
    border: "0.5rem white solid",
    borderRadius: "0.5rem" 
  }

  return <div style={cardStyle} id={index} onClick={()=>func(index)} ></div>;
}

export default FrontCard
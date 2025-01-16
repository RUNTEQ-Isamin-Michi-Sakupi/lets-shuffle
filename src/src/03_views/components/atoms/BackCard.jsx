import React from 'react'

function BackCard({ name, index }) {
    const cardStyle = {
      width: "6rem",
      aspectRatio: "58 / 89",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 6px black",
      border: "0.5rem white solid",
      borderRadius: "0.5rem" 
    }
  
    return <div style={cardStyle} id={index} >{name}</div>;
  }

export default BackCard
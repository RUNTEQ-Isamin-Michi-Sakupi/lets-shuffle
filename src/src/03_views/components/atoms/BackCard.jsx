import React from 'react'

function BackCard({ name, index }) {
    const cardStyle = {
      width: "6rem",
      aspectRatio: "58 / 89",

      backgroundImage: "url(/img/backcard.png)",
      backgroundSize: "180%",
      backgroundPosition: 'center',
      boxShadow: "0 0 6px black",
      border: "0.5rem white solid",
      borderRadius: "0.5rem" ,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  
    const pStyle = {
      textAlign: 'center',
    }
    return <div style={cardStyle} id={index}>
        <p style={pStyle}>{name}</p>
      </div>;
  }

export default BackCard
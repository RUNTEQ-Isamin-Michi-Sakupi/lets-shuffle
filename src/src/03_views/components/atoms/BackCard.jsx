import React from 'react'

function BackCard({ name, index }) {
    // カードのスタイルの参考URL：https://zenn.dev/kagan/articles/css-spread-cards
    const cardStyle = {
      width: "6rem",
      aspectRatio: "47 / 76",
      backgroundImage: "url(/img/backcard.png)",
      backgroundSize: "190%",
      backgroundPosition: 'center',
      boxShadow: "0 0 1rem black",
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
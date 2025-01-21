import React, { useState } from 'react'
import FrontCard from '../atoms/FrontCard';
import BackCard from '../atoms/BackCard';
import Button from '../atoms/Button'
import ReactCardFlip from 'react-card-flip';


function ShuffleContent(props){
  // useAnnouncerからデータを取得
  const { nameArray, allOpen, everyOpen, flipCard, isFlippedArray } = props

  const cardAndButtonStyle = {
    marginTop: '20px',
    width: '90vw',
    height: '90vh'
  }

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const buttonStyle = {
    margin:'10px',
    padding: '10px 20px', // 余白
    fontSize: '16px', // フォントサイズ
    width: '200px', // 幅
    textAlign: 'center', // 文字揃え
    borderRadius: '5px', // 角丸
    cursor: 'pointer', // マウスカーソルで指を表示
    transition: 'transform 0.2s', // 変形のトランジション
  }

  const cardContainerStyle = {
    marginTop: '50px',
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '50vw',
    justifyContent: 'center'
  }
  const cardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px' // 幅
  }

  return (
    <div style={cardAndButtonStyle}>
        <div style={buttonContainerStyle}>
        <div style={buttonStyle}>
            <Button
            name={"一気に順番決め"}
            func={allOpen}
            style={buttonStyle }
            />
        </div>
        <div style={buttonStyle}>
          <Button
            name={"一枚ずつめくる"}
            func={everyOpen}
            style={buttonStyle }
          />
        </div>
        </div>
        <div style={cardContainerStyle}>
        <div style={cardStyle }>
              {nameArray.map((name, index) => (
                <ReactCardFlip isFlipped={isFlippedArray[index]} key={index}>
                  <FrontCard name={name} index={index} func={flipCard} />
                  <BackCard name={name} index={index} />
                </ReactCardFlip>
              ))}
          </div>
        </div>
    </div>
  )
}



export default ShuffleContent
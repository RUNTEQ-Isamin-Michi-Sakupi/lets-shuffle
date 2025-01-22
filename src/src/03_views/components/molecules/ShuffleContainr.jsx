import React, { useState } from 'react'
import FrontCard from '../atoms/FrontCard';
import BackCard from '../atoms/BackCard';
import Button from '../atoms/Button'
import ReactCardFlip from 'react-card-flip';
import './ShuffleContainer.css'


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
  // ボタンを押したときのスタイル変更
    const handleMouseDown = (e) => {
      e.target.style.transform = 'scale(0.95)';
  };

  // ボタンを離したときのスタイル変更
  const handleMouseUp = (e) => {
      e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={cardAndButtonStyle}>
        <div style={buttonContainerStyle}>
        <div>
            <Button
            className={"button button-allOpen"}
            name={"一気に順番決め"}
            func={allOpen}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            />
        </div>
        <div>
          <Button
            className={"button button-everyOpen"}
            name={"一枚ずつめくる"}
            func={everyOpen}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
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
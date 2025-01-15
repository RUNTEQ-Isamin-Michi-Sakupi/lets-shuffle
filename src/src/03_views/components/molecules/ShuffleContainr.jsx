import React, { useState } from 'react'
import FrontCard from '../atoms/FrontCard';
import BackCard from '../atoms/BackCard';
import Button from '../atoms/Button'
import { useAnnouncer } from '../../../02_hook/useShareState';
import ReactCardFlip from 'react-card-flip';

const ShuffleContent = () => {
  // useAnnouncerからデータを取得
  const { nameArray, allOpen, everyOpen, flipCard, isFlippedArray } = useAnnouncer();

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
    margin:'10px'
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
            />
        </div>
        <div style={buttonStyle}>
          <Button
            name={"一枚ずつめくる"}
            func={everyOpen}
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
import React, { useState } from 'react'
import FrontCard from '../atoms/FrontCard';
import BackCard from '../atoms/BackCard';
import Button from '../atoms/Button'
import ReactCardFlip from 'react-card-flip';
import './ShuffleContainer.css'

// sortable
import {
  DndContext, 
  closestCenter,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';


function ShuffleContent(props){
  // const { nameArray, allOpen, everyOpen, flipCard, isFlippedArray } = props
  // useAnnouncerからデータを取得
  const { nameArray, allOpen, isFlippedArray,sensors,handleDragEnd } = props


  const cardAndButtonStyle = {
    marginTop: '2vh',
    width: '90vw',
    height: '70vh'
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
            name={"順番を決める！"}
            func={allOpen}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            />
        </div>
        {/* <div>
          <Button
            className={"button button-everyOpen"}
            name={"一枚ずつめくる"}
            func={everyOpen}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          />
        </div> */}
        </div>
        <div style={cardContainerStyle}>
          <div style={cardStyle }>
          <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={nameArray}
              strategy={verticalListSortingStrategy}
            >
              {nameArray.map((index) => <SortableItem key={index} id={index} isFlipped={isFlippedArray[nameArray.indexOf(index)]} />)}
            </SortableContext>
          </DndContext>
          </div>
        </div>
    </div>
  )
}

export default ShuffleContent
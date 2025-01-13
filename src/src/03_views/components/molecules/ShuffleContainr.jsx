import React from 'react'
import FrontCard from '../atoms/FrontCard';
import Button from '../atoms/Button'
import { useAnnouncer } from '../../../02_hook/useShareState';

const ShuffleContent = () => {
  // useAnnouncerからデータを取得
  const { nameArray, reshuffle } = useAnnouncer();

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
            func={reshuffle}
            />
        </div>
        <div style={buttonStyle}>
          <Button
            name={"一気に順番決め"}
            func={reshuffle}
          />
        </div>
        </div>
        <div style={cardContainerStyle}>
        <div style={cardStyle }>
          {nameArray.map((name, index) => (
            <FrontCard key={index} name={name} index={index} /> // 配列の要素に基づいてカードをレンダリング
          ))}
        </div>
        </div>
    </div>
  )
}



export default ShuffleContent
import React from 'react'
import Card from '../atoms/Card';
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
    display: 'grid',
    justifyContent: 'center'
  }
  const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)', // Gridの繰り返し回数
    gap: '15px' // 幅
  }


  return (
    <div style={cardAndButtonStyle}>
        <div style={buttonContainerStyle}>
        <div style={buttonStyle}>
            <Button
            name={"一気に順番決め"}
            onClick={reshuffle}
            />
        </div>
        <div style={buttonStyle}>
          <Button
            name={"一気に順番決め"}
            onClick={reshuffle}
          />
        </div>
        </div>
        <div style={cardContainerStyle}>
        <div style={cardStyle }>
          {nameArray.map((name, index) => (
            <Card key={index} name={name} /> // 配列の要素に基づいてカードをレンダリング
          ))}
        </div>
        </div>
    </div>
  )
}



export default ShuffleContent
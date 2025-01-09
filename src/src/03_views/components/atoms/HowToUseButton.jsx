import React, { useState } from 'react';
import HowToUse from './HowToUse';

const HowToUseButton = () => {
  const [showHowToUse, setShowHowToUse] = useState(false);

  const handleButtonClick = () => {
    setShowHowToUse(!showHowToUse);
  };

  const HowToUseButton_style = {
    position: 'fixed',
    right: '0px',
    backgroundColor: 'transparent', // 背景色を透明にする
    color: '#fff',
    border: '2px solid transparent', // 枠線を透明にする
    borderRadius: '5px',
    padding: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease', // トランジションを追加
    width: '150px',
    height: '101px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#1e90ff'; // ホバー時の背景色をドッジブルーに変更
    e.target.style.borderColor = '#1e90ff'; // ホバー時の枠線の色をドッジブルーに変更
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent'; // ホバー解除時の背景色を透明に戻す
    e.target.style.borderColor = 'transparent'; // ホバー解除時の枠線の色を透明に戻す
    e.target.style.transform = 'scale(1)'; // ホバー解除時に元のサイズに戻す
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={HowToUseButton_style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        使い方
      </button>
      {showHowToUse && <HowToUse onClose={handleButtonClick} />}
    </div>
  );
};

export default HowToUseButton;
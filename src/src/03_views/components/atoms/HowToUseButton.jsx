import React, { useState } from 'react';
import HowToUse from './HowToUse';

const HowToUseButton = () => {
  const [showHowToUse, setShowHowToUse] = useState(false);

  const handleButtonClick = () => {
    setShowHowToUse(!showHowToUse);
  };

  const HowToUseButton_style = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff', // 背景色をピンクに変更
    color: '#fff', // テキストの色を白に変更
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // ボックスシャドウを強調
    transition: 'background-color 0.3s ease, transform 0.3s ease', // トランジションを追加
    width: '60px', // ボタンの幅を広げる
    height: '60px', // ボタンの高さを広げる
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#ff1493'; // ホバー時の背景色を濃いピンクに変更
    e.target.style.transform = 'scale(1.1)'; // ホバー時に少し大きくする
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#fff'; // ホバー解除時の背景色を元に戻す
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
        ❤️
      </button>
      {showHowToUse && <HowToUse onClose={handleButtonClick} />}
    </div>
  );
};

export default HowToUseButton;
import React, { useState } from 'react';
import HowToUse from './HowToUse';

const HowToUseButton = () => {
  const [showHowToUse, setShowHowToUse] = useState(false);

  const handleButtonClick = () => {
    setShowHowToUse(!showHowToUse);
  };

  const HowToUseButton_style = {
    position: 'fixed', // 固定位置
    top: '10px', // 上から10px
    right: '10px', // 右から10px
    backgroundColor: '#fff', // 背景色
    color: '#000', // テキストの色
    border: 'none', // 枠線をなしに
    borderRadius: '50%', // 角丸（円形にする）
    padding: '10px', // 余白
    fontSize: '24px', // フォントサイズ
    cursor: 'pointer', // マウスカーソルで指を表示
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // ボックスシャドウ
    transition: 'background-color 0.3s ease', // 背景色のトランジション
    width: '50px', // ボタンの幅
    height: '50px', // ボタンの高さ
    display: 'flex', // アイコンを中央
    justifyContent: 'center', // アイコンを中央
    alignItems: 'center', // アイコンを中央
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={HowToUseButton_style}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#ADD8E6'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
      >
        ❤️
      </button>
      {showHowToUse && <HowToUse onClose={handleButtonClick} />}
    </div>
  );
};

export default HowToUseButton;
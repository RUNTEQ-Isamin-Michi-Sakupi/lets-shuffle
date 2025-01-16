import React, { useState } from 'react';
import HowToUse from './HowToUse';

const HowToUseButton = () => {
  const [showHowToUse, setShowHowToUse] = useState(false);

  const handleButtonClick = () => {
    setShowHowToUse(!showHowToUse);
  };

  const HowToUseButton_style = {
    position: 'fixed', // 固定位置
    right: '0px', // 右から0px
    backgroundColor: 'transparent', // 背景色を透明にする
    color: '#fff', // テキストの色
    border: '2px solid transparent', // 枠線を透明にする
    borderRadius: '5px', // 角を丸くする
    padding: '10px', // ボタンの余白
    fontSize: '30px', // フォントサイズ
    cursor: 'pointer', // マウスカーソルを指に変更
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // ボックスシャドウを追加
    transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease', // トランジションを追加
    width: '150px', // ボタンの幅
    height: '101px', // ボタンの高さ
    display: 'flex', // アイコンを中央に配置
    justifyContent: 'center', // アイコンを中央に配置
    alignItems: 'center', // アイコンを中央に配置
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; // ホバー時の背景色を薄い黒色に変更
    e.target.style.borderColor = 'rgba(0, 0, 0, 0.3)'; // ホバー時の枠線の色を薄い黒色に変更
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent'; // ホバー解除時の背景色を透明に戻す
    e.target.style.borderColor = 'transparent'; // ホバー解除時の枠線の色を透明に戻す
    e.target.style.transform = 'scale(1)'; // ホバー解除時に元のサイズに戻す
  };

  return (
    <div>
      <button
        onClick={handleButtonClick} // ボタンをクリックしたときの処理
        style={HowToUseButton_style} // ボタンのスタイル
        onMouseEnter={handleMouseEnter} // マウスが乗ったときの処理
        onMouseLeave={handleMouseLeave} // マウスが離れたときの処理
      >
        使い方
      </button>
      {showHowToUse && <HowToUse onClose={handleButtonClick} />}
    </div>
  );
};

export default HowToUseButton;
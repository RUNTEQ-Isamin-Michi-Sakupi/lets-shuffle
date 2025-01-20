import React, { useState } from 'react';
import './HowToUseButton.css'; // CSSファイルをインポート
import HowToUse from './HowToUse';

const HowToUseButton = () => {
  const [showHowToUse, setShowHowToUse] = useState(false);

  const handleButtonClick = () => {
    setShowHowToUse(!showHowToUse);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick} // ボタンをクリックしたときの処理
        className="howtouse-button" // ボタンのクラス名
      >
        使い方
      </button>
      {showHowToUse && <HowToUse onClose={handleButtonClick} />}
    </div>
  );
};

export default HowToUseButton;
import React from 'react';
import './HowToUse.css'; // CSSファイルをインポート

const HowToUse = ({ onClose }) => {
  return (
    <div className="howtouse-overlay">
      <div className="howtouse-video-container"> {/* 動画コンテナのスタイル */}
        <button onClick={onClose} className="howtouse-close-button">✖</button> {/* 閉じるボタン */}
        <video width="1050" controls autoPlay> {/* 幅を1050pxに変更 */}
          <source src={`${process.env.PUBLIC_URL}/how_to_use.mp4`} type="video/mp4" /> {/* 動画ファイルのパス */}
          お使いのブラウザは動画タグに対応していません。 {/* 動画が再生できない場合の代替テキスト */}
        </video>
      </div>
    </div>
  );
};

export default HowToUse;
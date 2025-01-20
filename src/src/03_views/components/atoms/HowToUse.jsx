import React from 'react';

const HowToUse = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={videoContainerStyle}> {/* 動画コンテナのスタイル */}
        <button onClick={onClose} style={closeButtonStyle}>✖</button> {/* 閉じるボタン */}
        <video width="1050" controls autoPlay> {/* 幅を1050pxに変更 */}
          <source src={`${process.env.PUBLIC_URL}/how_to_use.mp4`} type="video/mp4" /> {/* 動画ファイルのパス */}
          お使いのブラウザは動画タグに対応していません。 {/* 動画が再生できない場合の代替テキスト */}
        </video>
      </div>
    </div>
  );
};

const overlayStyle = { // オーバーレイのスタイル
  position: 'fixed', // 固定位置
  top: 0, // 上から0
  left: 0, // 左から0
  width: '100%', // 幅を100%
  height: '100%', // 高さを100%
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景色（黒色）
  display: 'flex', // 要素を中央に配置
  justifyContent: 'center', // 要素を中央に配置
  alignItems: 'center', // 要素を中央に配置
  zIndex: 1000, // オーバーレイを最前面に表示
};

const videoContainerStyle = { // 動画コンテナのスタイル
  backgroundColor: '#fff', // 背景色
  padding: '20px', // 余白
  borderRadius: '10px', // 角丸
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // ボックスシャドウ
  position: 'relative', // 相対位置
  display: 'flex', // 要素を中央に配置
  flexDirection: 'column', // 要素を縦に配置
  alignItems: 'center', // 要素を中央に配置
};

const closeButtonStyle = { // 閉じるボタンのスタイル
  position: 'absolute', // 絶対位置
  top: '-35px', // 上から-35px
  right: '-35px', // 右から-35px
  backgroundColor: '#ff5c5c', // 背景色
  border: 'none', // 枠線をなしに
  borderRadius: '50%', // 角丸（円形にする）
  width: '40px', // 幅を40px
  height: '40px', // 高さを40px
  fontSize: '24px', // フォントサイズ
  color: '#fff', // テキストの色
  cursor: 'pointer', // マウスカーソルで指を表示
  display: 'flex', // アイコンを中央に配置
  justifyContent: 'center', // アイコンを中央に配置
  alignItems: 'center', // アイコンを中央に配置
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // ボックスシャドウ
};

export default HowToUse;

import React from 'react'; //背景画像用のテストコード
import SettingButtonContiner from '../molecules/SettingButtonContiner';
import ShuffleContainer from '../molecules/ShuffleContainr';
import DisplayNameContainer from '../molecules/DisplayNameContainer';


const Body = () => {
  const bodyStyle = {
    backgroundImage: 'url(/img/background.png)', // 背景画像のパス
    backgroundSize: 'cover', // 画像をコンテナ全体にカバー
    backgroundPosition: 'center', // 画像を中央に配置
    backgroundRepeat: 'no-repeat', // 画像を繰り返さない
    width: '100vw', // ビューポートの幅
    height: '100vh', // ビューポートの高さ
    position: 'fixed', // 固定位置
    zIndex: '-1', // 背景を一番後ろに表示
  };

  const containerStyle = {
    marginTop: '20px',
    display: 'flex',
    width: '100vw'
  }

  return (
    <div style={bodyStyle}>
      {/* コンテンツをここに追加 */}
      <div style={containerStyle}>
        <SettingButtonContiner />
        <ShuffleContainer />
        <DisplayNameContainer />
      </div>
    </div>
  );
};

export default Body;


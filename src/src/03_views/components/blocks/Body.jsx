import React from 'react'; //背景画像用のテストコード
import SettingButton from '../atoms/SettingButton'; // 設定画面を表示するコンポーネント みちが追加
import Card from '../atoms/Card';
import Button from '../atoms/Button'
import InputName from '../atoms/InputName';
import OutputName from '../atoms/OutputName';

const Body = () => {
    const bodyStyle = {
        backgroundImage: 'url(/img/backgroundtest.jpg)', // 背景画像のパス
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
    const cardAndButtonStyle = {
      marginTop: '30px',
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
      marginTop: '30px',
      display: 'grid',
      justifyContent: 'center'
    }
    const cardStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)', // Gridの繰り返し回数
      gap: '15px' // 幅
    }
    const displayNameContainerStyle = {
      marginTop: '30px',
      display: 'flex'
    }

    const inputnameContainer = {
      marginLeft: '2.5px',
      marginRight: '2.5px'

    }
    const outputnameContainer = {
      marginLeft: '2.5px',
      marginRight: '5px'
    }

    return (
        <div style={bodyStyle}>
            {/* コンテンツをここに追加 */}
            <div style={containerStyle}>
              <div>
                <SettingButton /> {/* 設定画面を表示するボタン */}
              </div>
              <div style={cardAndButtonStyle}>
                <div style={buttonContainerStyle}>
                  <div style={buttonStyle}>
                    <Button />
                  </div>
                  <div style={buttonStyle}>
                    <Button />
                  </div>
                </div>
                <div style={cardContainerStyle}>
                  <div style={cardStyle }>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </div>
                </div>
              </div>
              <div style={displayNameContainerStyle}>
                <div style={inputnameContainer}>
                  <InputName />
                </div>
                <div style={outputnameContainer}>
                  <OutputName />
                </div>
              </div>
          </div>
      </div>
    );
};

export default Body;


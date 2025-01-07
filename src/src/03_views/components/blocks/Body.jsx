import React from 'react'; //背景画像用のテストコード
import Card from '../atoms/Card';
import InputName from '../atoms/InputName';
import OutputName from '../atoms/OutputName';

const Body = () => {
    const bodyStyle = {
        backgroundImage: 'url(/backgroundtest.jpg)', // 背景画像のパス
        backgroundSize: 'cover', // 画像をコンテナ全体にカバー
        backgroundPosition: 'center', // 画像を中央に配置
        backgroundRepeat: 'no-repeat', // 画像を繰り返さない
        width: '100vw', // ビューポートの幅
        height: '100vh', // ビューポートの高さ
        position: 'fixed', // 固定位置
        zIndex: '-1', // 背景を一番後ろに表示
    };

    return (
        <div style={bodyStyle}>
            {/* コンテンツをここに追加 */}
            <Card />
            <InputName />
            <OutputName />
        </div>
    );
};

export default Body;


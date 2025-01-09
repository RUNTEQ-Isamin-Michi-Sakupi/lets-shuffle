import React from 'react'
import HowToUse from '../atoms/HowToUse';

const Header = () => {
  const Header_style = {
    backgroundImage: 'url(/img/header.png)',
    backgroundSize: 'cover', // 画像をコンテナ全体にカバー
    backgroundPosition: 'center', // 画像を中央に配置
    backgroundRepeat: 'no-repeat', // 画像を繰り返さない
    width: '100vw', // ビューポートの幅
    height: '13vh' // ビューポートの高さ
  }
  return (
    <div style={Header_style}>
      <HowToUse />
    </div>
  )
}

export default Header
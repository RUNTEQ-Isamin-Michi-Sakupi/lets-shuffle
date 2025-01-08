import React from 'react'

const Footer = () => {
  const Footer_style = {
    backgroundImage: 'url(/img/footer.png)',
    backgroundSize: 'cover', // 画像をコンテナ全体にカバー
    backgroundPosition: 'center', // 画像を中央に配置
    backgroundRepeat: 'no-repeat', // 画像を繰り返さない
    position: 'absolute', /*←絶対位置*/
    bottom: 0, /*下に固定*/
    width: '100vw', // ビューポートの幅
    height: '5vh' // ビューポートの高さ
  }
  return (
    <div style={Footer_style}>
      
    </div>
  )
}

export default Footer
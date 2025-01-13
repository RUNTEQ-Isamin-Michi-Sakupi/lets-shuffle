import React from 'react'

const HowToUse = () => {
  const HowToUse_style ={
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
    display: 'flex', // アイコンを中央に配置
    justifyContent: 'center', // アイコンを中央に配置
    alignItems: 'center', // アイコンを中央に配置
    marginLeft: '20px', // ボタンの左側に余白を設定
    marginBottom: '20px', // ボタンの下側に余白を設定
  }

  return (
    <button
      // onClick={""}
      style = {
        HowToUse_style
      }
  onMouseEnter={(e) => e.target.style.backgroundColor = '#ADD8E6'} // ホバー時の背景色
  onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'} // ホバー解除時の背景色
>
  ❤️
</button>
  )
}

export default HowToUse
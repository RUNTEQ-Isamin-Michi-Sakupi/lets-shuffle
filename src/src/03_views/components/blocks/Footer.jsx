import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const Footer_style = {
    backgroundImage: 'url(/img/footer.png)',
    backgroundSize: 'cover', // 画像をコンテナ全体にカバー
    backgroundPosition: 'center', // 画像を中央に配置
    backgroundRepeat: 'no-repeat', // 画像を繰り返さない
    position: 'fixed', /*←絶対位置*/
    bottom: 0, /*下に固定*/
    width: '100vw', // ビューポートの幅
    height: '5vh', // ビューポートの高さ
  }

  const Devex = {
    color: '#d00',
    textAlign: 'right',
    alignSelf: 'center',
    marginRight: '2vw',
    margin: '0',
    marginTop: '1vh'
  }

  const Atag = {
    color: '#d00',
    fontSize: '16px',
  }

    const Isamin = "https://x.com/rikky1211_61b" 
    const Michi = "https://x.com/michihiro721"
    const Sakupi = "https://x.com/mskk9783"


  return (
    <div>
      <div style={Footer_style}>
        <p style={Devex}>
          Copyright ©️ 2025 RUNTEQ &nbsp; &nbsp;
          <a target="_blank" href={Isamin} style={Atag}>61b_Isamin</a> &nbsp; <FaXTwitter /> &nbsp; / &nbsp; 
          <a target="_blank" href={Michi} style={Atag}>60b_Michi</a> &nbsp; <FaXTwitter />  &nbsp; / &nbsp; 
          <a target="_blank" href={Sakupi} style={Atag}>60b_Sakupi</a> &nbsp; <FaXTwitter />
        </p>
      </div>
    </div>
  )
}

export default Footer
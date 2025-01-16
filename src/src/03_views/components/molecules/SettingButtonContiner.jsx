import React from 'react'
import SettingButton from '../atoms/SettingButton'; // 設定画面を表示するコンポーネント みちが追加

const SettingButtonContiner = () => {
  const settingButtonContinerStyle = {
      marginLeft: '20px'
    }
     
  return (
    <div style={settingButtonContinerStyle}> 
        <SettingButton /> {/* 設定画面を表示するボタン */}
    </div>
  )
}

export default SettingButtonContiner
import React from 'react'
import SettingButton from '../atoms/SettingButton'; // 設定画面を表示するコンポーネント みちが追加

function SettingButtonContiner (props) {
  const settingButtonContinerStyle = {
      marginLeft: '20px'
    }
     
  const { nameArray, preAnnouncer,nextAnnouncer,announcerIndex} = props
  return (
    <div style={settingButtonContinerStyle}> 
        <SettingButton
          nameArray={nameArray}
          preAnnouncer={preAnnouncer}
          nextAnnouncer={nextAnnouncer}
          announcerIndex={announcerIndex}
        /> {/* 設定画面を表示するボタン */}
    </div>
  )
}

export default SettingButtonContiner
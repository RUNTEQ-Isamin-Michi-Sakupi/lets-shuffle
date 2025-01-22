import React from 'react'
import InputTime from '../atoms/InputTime'; // 設定画面を表示するコンポーネント みちが追加

function SettingButtonContiner (props) {
     
  const { presentationTime,
    questionTime,
    firstNotification,
    secondNotification,
    volume,
    notificationSound,nameArray, preAnnouncer,nextAnnouncer,announcerIndex } = props
  return (
      <InputTime
        presentationTime={presentationTime}
        questionTime={questionTime}
        firstNotification={firstNotification}
        secondNotification={secondNotification}
        volume={volume}
        notificationSound={notificationSound}
        nameArray={nameArray}
        preAnnouncer={preAnnouncer}
        nextAnnouncer={nextAnnouncer}
        announcerIndex={announcerIndex}
    />
  )
}

export default SettingButtonContiner
import React from 'react'
import InputTime from '../atoms/InputTime'; // 設定画面を表示するコンポーネント みちが追加

function SettingButtonContiner (props) {
     
  const { presentationTime,
    questionTime,
    firstNotification,
    secondNotification,
    volume,
    notificationSound,nameArray, preAnnouncer,nextAnnouncer,announcerIndex,isFlippedArray } = props
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
        isFlippedArray={isFlippedArray}
    />
  )
}

export default SettingButtonContiner
import React from 'react'
import { useAnnouncer } from '../../../02_hook/useShareState';

function Button (props)  {
  const { name, func } = props;
  // シャッフルさせる
  const { nameArray, reshuffle } = useAnnouncer();

  // クリックイベント
  const handleClickAll = () => {
    reshuffle();
    namePutIn(nameArray)
    console.log(nameArray);
  };

  // 一気に開くとき
  if( func == 0 ) {
    return (
        <button onClick={handleClickAll}>{name}</button>
    )
  }

  // 一枚づつめくる
  if( func == 1 ) {
    return (
        <button>{name}</button>
    )
  }
}

// 一気に開く場合
function namePutIn(array){
  const outputEle = document.getElementById("outputname")
  let names = ""
  for (var i = 0; i < array.length; i++) {
    // 要素に対しての処理
    let name = array[i] + "\n"
    names += name
  }
  outputEle.value = names
}



export default Button
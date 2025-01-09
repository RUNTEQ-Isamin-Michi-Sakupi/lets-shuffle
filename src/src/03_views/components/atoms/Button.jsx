import React from 'react'

function Button (props)  {
  const { name, onClick } = props;
  return (
      <button onClick={onClick}>{name}</button>
  )
}

// // 一気に開く場合
// function namePutIn(array){
//   const outputEle = document.getElementById("outputname")
//   let names = ""
//   for (var i = 0; i < array.length; i++) {
//     // 要素に対しての処理
//     let name = array[i] + "\n"
//     names += name
//   }
//   outputEle.value = names
// }

export default Button
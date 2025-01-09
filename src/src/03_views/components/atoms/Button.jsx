import React from 'react'

function Button (props)  {
  let name = props.name;
  let func = props.func;
  if( func == 0 ) {
    return (
        <button onClick={Shaffle}>{name}</button>
    )
  }
  if( func == 1 ) {
    return (
        <button>{name}</button>
    )
  }
}

function Shaffle () {
  let input = getInputName()
  const result = arrayShuffle(input)
  namePutIn(result)

}

// 登壇者名の取得
function getInputName(){
  let inputNameArray = document.getElementById("inputname").value.split("\n")
  return inputNameArray
}

// シャッフル機能
function arrayShuffle(array) {
  const cloneArray = array

  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1))
    // 配列の要素の順番を入れ替える
    let tmpStorage = cloneArray[i]
    cloneArray[i] = cloneArray[rand]
    cloneArray[rand] = tmpStorage
  }
  return cloneArray
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
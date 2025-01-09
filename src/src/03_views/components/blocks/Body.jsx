import React from 'react'; //背景画像用のテストコード
import SettingButtonContiner from '../molecules/SettingButtonContiner';
import ShuffleContainer from '../molecules/ShuffleContainr';
import DisplayNameContainer from '../molecules/DisplayNameContainer';


const Body = () => {
    const bodyStyle = {
        backgroundImage: 'url(/img/backgroundtest.jpg)', // 背景画像のパス
        backgroundSize: 'cover', // 画像をコンテナ全体にカバー
        backgroundPosition: 'center', // 画像を中央に配置
        backgroundRepeat: 'no-repeat', // 画像を繰り返さない
        width: '100vw', // ビューポートの幅
        height: '100vh', // ビューポートの高さ
        position: 'fixed', // 固定位置
        zIndex: '-1', // 背景を一番後ろに表示
    };
    const containerStyle = {
      marginTop: '20px',
      display: 'flex',
      width: '100vw'
    }

    return (
        <div style={bodyStyle}>
            {/* コンテンツをここに追加 */}
            <div style={containerStyle}>
              <SettingButtonContiner />
              <ShuffleContainer />
              <DisplayNameContainer />
          </div>
      </div>
    );
};


// 登壇者名の取得
function getInputName(){
  const inputNameArray = document.getElementById("inputname").value.split("\n")
  return inputNameArray
}

// シャッフル機能
function arrayShuffle(array) {
  const cloneArray = [...array]

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


export default Body;


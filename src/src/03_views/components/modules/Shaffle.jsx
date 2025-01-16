export default function Shaffle () {
    return arrayShuffle(getInputName())
}

// 登壇者名の取得
function getInputName(){
    const inputNameArray = document.getElementById("inputname").value.split("\n")
    const cleanArray = inputNameArray.filter(Boolean);
    return cleanArray
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
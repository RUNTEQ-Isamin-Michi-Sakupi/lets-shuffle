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
// 参考：https://zenn.dev/k_kazukiiiiii/articles/cf3256ef6cbd84
function arrayShuffle(array) {
    const cloneArray = array

    for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1))
    // 配列の要素の順番を入れ替える
    let tmp = cloneArray[i]
    cloneArray[i] = cloneArray[rand]
    cloneArray[rand] = tmp
    }
    return cloneArray
}
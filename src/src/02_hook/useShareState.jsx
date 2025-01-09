import { useState } from "react";

export const useAnnouncer = () => {
    const [ nameArray, setNameArray] = useState([]);

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

    const input = getInputName()
    setNameArray = arrayShuffle(input)

    return nameArray;

}
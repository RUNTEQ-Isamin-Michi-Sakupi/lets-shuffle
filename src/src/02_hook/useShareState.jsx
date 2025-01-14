import { useState,useEffect } from "react";
import Shaffle from "../03_views/components/modules/Shaffle";

export const useAnnouncer = () => {
    // nameの配列を定義
    const [ nameArray, setNameArray ] = useState([]);

    // トリガー用の状態を定義
    const [ trigger, setTrigger ] = useState(0);

    // シャッフルの状態を定義
    const [ isFlippedArray, setIsFlippedArray ] = useState([]);

    // Shaffleを呼び出して状態を更新
    // triggerが変更されるたびに再実行
    useEffect(() => {
        const shuffledArray = Shaffle();
        setNameArray(shuffledArray);
        const falseArray = Array(shuffledArray.length).fill(false)
        setIsFlippedArray(falseArray);
    }, [trigger]); 

    // 外部からトリガーを発火させるための関数を返す
    const reshuffle = () => {
        setTrigger((prev) => prev + 1); // triggerを更新
    };

    // カードをめくるための関数
    const flipCard = (nameArrayIndex) => {
        setIsFlippedArray(
            isFlippedArray.map(
                (isFlipped, index) => (index === nameArrayIndex ? !isFlipped:isFlipped )
            )
        )
    }

    // 一気に開く
    // const allOpen = () => {
    //     // カードが一気にめくれるヤツ
    //     setTrigger((prev) => prev + 1); // triggerを更新
    // }
    
    // // 一枚づつ開く
    // const everyOpen = () => {
    //     // カードが一枚づつめくれる
    //     setTrigger((prev) => prev + 1); // triggerを更新
    // }
    
    return { nameArray, reshuffle, flipCard, isFlippedArray };   
}
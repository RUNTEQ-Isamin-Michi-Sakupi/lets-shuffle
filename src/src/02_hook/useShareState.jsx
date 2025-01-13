import { useState,useEffect } from "react";
import Shaffle from "../03_views/components/modules/Shaffle";

export const useAnnouncer = () => {
    const [ nameArray, setNameArray] = useState([]);
    const [ trigger, setTrigger] = useState(0); // トリガー用の状態

    // Shaffleを呼び出して状態を更新
    useEffect(() => {
        const shuffledArray = Shaffle();
        setNameArray(shuffledArray);
    }, [trigger]); // triggerが変更されるたびに再実行

    // 外部からトリガーを発火させるための関数を返す
    const reshuffle = () => {
        setTrigger((prev) => prev + 1); // triggerを更新
    };

    // 一気に開く
    const allOpen = () => {
        // カードが一気にめくれるヤツ
        setTrigger((prev) => prev + 1); // triggerを更新
    }
    
    // 一枚づつ開く
    const everyOpen = () => {
        // カードが一枚づつめくれる
        setTrigger((prev) => prev + 1); // triggerを更新
    }
    
    return { nameArray, reshuffle };   
}
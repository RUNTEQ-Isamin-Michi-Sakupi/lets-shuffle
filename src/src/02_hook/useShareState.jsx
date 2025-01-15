import { useState,useEffect } from "react";
import Shaffle from "../03_views/components/modules/Shaffle";

export const useAnnouncer = () => {
    // nameの配列を定義
    const [ nameArray, setNameArray ] = useState([]);

    // トリガー用の状態を定義
    const [ trigger, setTrigger ] = useState(0);

    // カードの状態を定義
    const [ isFlippedArray, setIsFlippedArray ] = useState([]);

    // シャッフルの操作モードを定義
    const [ currentMode, setCurrentMode ] = useState("all");

    // 現在のIndexを指定
    const [ currentIndex, setCurrentIndex ] = useState(0);

    // Shaffleを呼び出して状態を更新
    useEffect(() => {
        const initialize = () => {
            // 名前をシャッフルする
            const shuffledArray = Shaffle();
            setNameArray(shuffledArray);

            // カードの状態を定義する
            setIsFlippedArray(Array(shuffledArray.length).fill(false));

            // 一枚ずつ開く場合のインデックスもリセット
            setCurrentIndex(0); 
          };
          initialize();
    }, []); 

    // シャッフル関数
    const reshuffle = () => {
        const shuffledArray = Shaffle();
        setNameArray(shuffledArray);
        setIsFlippedArray(Array(shuffledArray.length).fill(false));
        setCurrentIndex(0);
      };

    // カードをめくるための関数
    const flipCard = (nameArrayIndex) => {
        setIsFlippedArray(
            isFlippedArray.map(
                (isFlipped, index) => (index === nameArrayIndex ? !isFlipped:isFlipped )
            )
        )
    }

    // 一気に開く場合
    const allOpen = () => {
        setCurrentMode("all"); // モードを設定
        reshuffle(); // 再シャッフル
        setCurrentIndex(0);
    }
    
    // 一枚づつ開く
    const everyOpen = () => {
        setCurrentMode("every"); // モードを設定
        reshuffle(); // 再シャッフル
        setIsFlippedArray(Array(nameArray.length).fill(false));
    }


    // 自動でカードがめくれる処理
    useEffect(() => {
        if (currentMode === "all" && currentIndex < nameArray.length) {
        const timeout = setTimeout(() => {
            setIsFlippedArray((prev) =>
            prev.map((isFlipped, idx) => (idx === currentIndex ? true : isFlipped))
            );
            setCurrentIndex((prev) => prev + 1);
        }, 1000); // 0.5秒ごとにカードをめくる
        return () => clearTimeout(timeout); // クリーンアップ
        }
    }, [currentMode, currentIndex, nameArray.length]);
    
    return { nameArray, allOpen, everyOpen, flipCard, isFlippedArray };   
}
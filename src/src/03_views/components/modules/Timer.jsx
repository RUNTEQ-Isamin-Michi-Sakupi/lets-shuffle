import { useState, useEffect } from 'react';
import Notice from './Notice'; // Noticeコンポーネントをインポート

const useTimer = (initialTime) => {
    const [time, setTime] = useState(initialTime); // 時間の状態管理
    const [isCounting, setIsCounting] = useState(false); // カウントダウン中かどうかの状態
    const [playNotice, setPlayNotice] = useState(false); // 通知音を再生するかどうかの状態

    useEffect(() => {
        let timer;
        if (isCounting && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000); // 1秒ごとに減少
        } else if (time === 0) {
            setIsCounting(false); // 時間が0になったらカウントを停止
            setPlayNotice(true); // 通知音を再生
        }
        return () => clearInterval(timer); // コンポーネントがアンマウントされる際にタイマーをクリア
    }, [isCounting, time]);

    // 時間をリセットする関数
    const resetTime = (newTime) => {
        setIsCounting(false);
        setTime(newTime); // 指定した時間にリセット
        setPlayNotice(false); // 通知音を停止
    };

    return { time, isCounting, setIsCounting, resetTime, playNotice };
};

export default useTimer;
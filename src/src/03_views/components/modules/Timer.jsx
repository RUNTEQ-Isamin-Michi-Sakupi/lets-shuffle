import { useState, useEffect } from 'react';

const useTimer = (initialTime) => {
    const [time, setTime] = useState(initialTime); // 時間の状態管理
    const [isCounting, setIsCounting] = useState(false); // カウントダウン中かどうかの状態
    const [playNotice1, setPlayNotice1] = useState(false); // 残り1分の通知音を再生するかどうかの状態
    const [playNotice2, setPlayNotice2] = useState(false); // カウントが0になったときの通知音を再生するかどうかの状態

    useEffect(() => {
        let timer;
        if (isCounting && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime === 61) { // 残り1分のタイミングで通知音1を再生
                        setPlayNotice1(true);
                    }
                    return prevTime - 1;
                });
            }, 1000); // 1秒ごとに減少
        } else if (time === 0) {
            setIsCounting(false); // 時間が0になったらカウントを停止
            setPlayNotice2(true); // 通知音2を再生
        }
        return () => clearInterval(timer); // コンポーネントがアンマウントされる際にタイマーをクリア
    }, [isCounting, time]);

    // 時間をリセットする関数
    const resetTime = (newTime) => {
        setIsCounting(false);
        setTime(newTime); // 指定した時間にリセット
        setPlayNotice1(false); // 通知音1を停止
        setPlayNotice2(false); // 通知音2を停止
    };

    return { time, isCounting, setIsCounting, resetTime, playNotice1, playNotice2 };
};

export default useTimer;
import { useState, useEffect } from 'react';

const useTimer = (initialTime) => {
    const [time, setTime] = useState(initialTime); // 時間の状態管理
    const [isCounting, setIsCounting] = useState(false); // カウントダウン中かどうかの状態

    useEffect(() => {
        let timer;
        if (isCounting && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000); // 1秒ごとに減少
        } else if (time === 0) {
            setIsCounting(false); // 時間が0になったらカウントを停止
        }
        return () => clearInterval(timer); // コンポーネントがアンマウントされる際にタイマーをクリア
    }, [isCounting, time]);

    // 時間をリセットする関数
    const resetTime = (newTime) => {
        setIsCounting(false);
        setTime(newTime); // 指定した時間にリセット
    };

    return { time, isCounting, setIsCounting, resetTime };
};

export default useTimer;
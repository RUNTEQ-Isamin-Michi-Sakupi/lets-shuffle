import React, { useState, useEffect } from 'react';

const InputTime = () => { // カウントダウンタイマーを表示するコンポーネント
    console.log('InputTime component rendered');
    const [time, setTime] = useState(600); // 初期時間を600秒（10分）に設定
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let timer; // タイマーを格納する変数
        if (isCounting && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsCounting(false); // カウントダウンが0になったらカウントを止める
        }
        return () => clearInterval(timer); // タイマーをクリアする
    }, [isCounting, time]);

    const startCountdown = () => { // カウントダウンを開始する関数
        setIsCounting(true);
    };

    const stopCountdown = () => {
        setIsCounting(false);
        setTime(600); // Reset time to initial value
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            {/* 発表開始ボタン */}
            <button
                onClick={startCountdown}
                style={{
                    backgroundColor: '#d1e7ff', // 背景色を青に変更
                    border: '1px solid #007bff', // 枠線を青に変更
                    borderRadius: '5px', // 角丸にする
                    padding: '10px 20px', // 上下に10px、左右に20pxの余白を追加
                    fontSize: '16px', // フォントサイズを16pxに変更
                    color: '#000', // 文字色を黒に変更
                    cursor: 'pointer', // マウスを重ねた時にカーソルを指に変更
                    width: '200px', // 幅を200pxに変更
                    textAlign: 'center', // テキストを中央揃えにする
                    marginLeft: '20px', // 左側に余白を追加
                }}
            >
                発表開始
            </button>

            {/* タイマー */}
            <div
                style={{
                    display: 'flex', // 横並びにする
                    flexDirection: 'column', // 縦に並べる
                    justifyContent: 'center', // 中央揃えにする
                    alignItems: 'center', // 中央揃えにする
                    width: '200px', // 幅を200px
                    height: '100px', // 高さを100px
                    border: '1px solid #000', // 枠線を黒に変更
                    borderRadius: '5px', // 角丸にする
                    backgroundColor: '#fff', // 背景色を白に変更
                    fontSize: '24px', // フォントサイズを24pxに変更
                    fontWeight: 'bold', // 太字にする
                    color: '#000', // 文字色を黒に変更
                    marginLeft: '20px', // 左側に余白を追加
                }}
            >
                <div>登壇時間</div>
                <div>{Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}</div>
            </div>

            {/* 発表終了ボタン */}
            <button
                onClick={stopCountdown}
                style={{
                    backgroundColor: '#ffd1d1', // 背景色を赤に変更
                    border: '1px solid #ff0000', // 枠線を赤に変更
                    borderRadius: '5px', // 角丸にする
                    padding: '10px 20px', // 上下に10px、左右に20pxの余白を追加
                    fontSize: '16px', // フォントサイズを16pxに変更
                    color: '#000', // 文字色を黒に変更
                    cursor: 'pointer', // マウスを重ねた時にカーソルを指に変更
                    width: '200px', // 幅を200pxに変更
                    textAlign: 'center', // テキストを中央揃えにする
                    marginLeft: '20px', // 左側に余白を追加
                }}
            >
                発表終了
            </button>
        </div>
    );
};

export default InputTime;
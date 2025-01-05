import React, { useEffect } from 'react';
import useTimer from '../modules/Timer'; // Timerロジックをインポート
import Notice from '../modules/Notice'; // Noticeコンポーネントをインポート

const InputTime = ({ presentationTime, questionTime }) => {
    // 登壇時間のタイマーを管理
    const presentationTimer = useTimer(presentationTime); // 初期値を親コンポーネントから受け取る
    // 質問時間のタイマーを管理
    const questionTimer = useTimer(questionTime); // 初期値を親コンポーネントから受け取る

    useEffect(() => {
        presentationTimer.resetTime(presentationTime);
    }, [presentationTime]);

    useEffect(() => {
        questionTimer.resetTime(questionTime);
    }, [questionTime]);

    const formatTime = (time) => {
        if (time < 0) {
            return `-${Math.abs(time)}`;
        }
        const minutes = Math.floor(time / 60);
        const seconds = ('0' + (time % 60)).slice(-2);
        return `${minutes}:${seconds}`;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            {/* 登壇時間セクション */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginLeft: '20px' }}>
                <button
                    onClick={() => presentationTimer.setIsCounting(true)}
                    style={{
                        backgroundColor: '#d1e7ff', // 背景色
                        border: '1px solid #007bff', // 枠線
                        borderRadius: '5px', // 角丸
                        padding: '10px 20px', // 余白
                        fontSize: '16px', // フォントサイズ
                        width: '200px', // 幅
                        textAlign: 'center', // 文字揃え
                        cursor: 'pointer', // マウスカーソルで指を表示
                    }}
                >
                    登壇開始
                </button>
                <div
                    style={{
                        display: 'flex', // 横並び
                        flexDirection: 'column', // 縦並び
                        justifyContent: 'center', // 中央揃え
                        alignItems: 'center', // 中央揃え
                        width: '200px', // 幅
                        height: '100px', // 高さ
                        border: '1px solid #000', // 枠線
                        borderRadius: '5px', // 角丸
                        backgroundColor: '#fff', // 背景色
                        fontSize: '24px', // フォントサイズ
                        fontWeight: 'bold', // 太字
                        color: '#000', // 文字色
                    }}
                >
                    <div>登壇時間</div>
                    <div>{formatTime(presentationTimer.time)}</div>
                    {presentationTimer.playNotice1 && <Notice play={presentationTimer.playNotice1} sound="/notification1.mp3" />} {/* 残り1分の通知音を再生 */}
                    {presentationTimer.playNotice2 && <Notice play={presentationTimer.playNotice2} sound="/notification2.mp3" />} {/* カウントが0になったときの通知音を再生 */}
                </div>
                <button
                    onClick={() => presentationTimer.resetTime(presentationTime)} // タイマーをリセット
                    style={{
                        backgroundColor: '#ffd1d1', // 背景色
                        border: '1px solid #ff0000', // 枠線
                        borderRadius: '5px', // 角丸
                        padding: '10px 20px', // 余白
                        fontSize: '16px', // フォントサイズ
                        width: '200px', // 幅
                        textAlign: 'center', // 文字揃え
                        cursor: 'pointer', // マウスカーソルで指を表示
                    }}
                >
                    登壇終了
                </button>
            </div>

            {/* 質問時間セクション */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginLeft: '20px' }}>
                <button
                    onClick={() => questionTimer.setIsCounting(true)} // カウントダウンを開始
                    style={{
                        backgroundColor: '#d4edda', // 背景色
                        border: '1px solid #28a745', // 枠線
                        borderRadius: '5px', // 角丸
                        padding: '10px 20px', // 余白
                        fontSize: '16px', // フォントサイズ
                        width: '200px', // 幅
                        textAlign: 'center', // 文字揃え
                        cursor: 'pointer', // マウスカーソルで指を表示
                    }}
                >
                    質問開始
                </button>
                <div
                    style={{
                        display: 'flex', // 横並び
                        flexDirection: 'column', // 縦並び
                        justifyContent: 'center', // 中央揃え
                        alignItems: 'center', // 中央揃え
                        width: '200px', // 幅
                        height: '100px', // 高さ
                        border: '1px solid #000', // 枠線
                        borderRadius: '5px', // 角丸
                        backgroundColor: '#fff', // 背景色
                        fontSize: '24px', // フォントサイズ
                        fontWeight: 'bold', // 太字
                        color: '#000', // 文字色
                    }}
                >
                    <div>質問時間</div>
                    <div>{formatTime(questionTimer.time)}</div>
                    {questionTimer.playNotice1 && <Notice play={questionTimer.playNotice1} sound="/notification1.mp3" />} {/* 残り1分の通知音を再生 */}
                    {questionTimer.playNotice2 && <Notice play={questionTimer.playNotice2} sound="/notification2.mp3" />} {/* カウントが0になったときの通知音を再生 */}
                </div>
                <button
                    onClick={() => questionTimer.resetTime(questionTime)} // タイマーをリセット
                    style={{
                        backgroundColor: '#ffd1d1', // 背景色
                        border: '1px solid #ff0000',  // 枠線
                        borderRadius: '5px', // 角丸
                        padding: '10px 20px', // 余白
                        fontSize: '16px', // フォントサイズ
                        width: '200px', // 幅
                        textAlign: 'center', // 文字揃え
                        cursor: 'pointer', // マウスカーソルで指を表示
                    }}
                >
                    質問終了
                </button>
            </div>
        </div>
    );
};

export default InputTime;
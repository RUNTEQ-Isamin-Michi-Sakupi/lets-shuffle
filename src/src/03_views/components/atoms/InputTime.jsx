import React from 'react';
import useTimer from '../modules/Timer'; // Timerロジックをインポート
import Notice from '../modules/Notice'; // Noticeコンポーネントをインポート

const InputTime = () => {
    // 登壇時間のタイマーを管理
    const presentationTimer = useTimer(600); // 初期値600秒（10分）
    // 質問時間のタイマーを管理
    const questionTimer = useTimer(300); // 初期値300秒（5分）

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
                    <div>{Math.floor(presentationTimer.time / 60)}:{('0' + (presentationTimer.time % 60)).slice(-2)}</div>
                    {presentationTimer.playNotice1 && <Notice play={presentationTimer.playNotice1} sound="/notification1.mp3" />} {/* 残り1分の通知音を再生 */}
                    {presentationTimer.playNotice2 && <Notice play={presentationTimer.playNotice2} sound="/notification2.mp3" />} {/* カウントが0になったときの通知音を再生 */}
                </div>
                <button
                    onClick={() => presentationTimer.resetTime(600)} // タイマーを600秒（10分）
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
                    <div>{Math.floor(questionTimer.time / 60)}:{('0' + (questionTimer.time % 60)).slice(-2)}</div>
                    {questionTimer.playNotice1 && <Notice play={questionTimer.playNotice1} sound="/notification1.mp3" />} {/* 残り1分の通知音を再生 */}
                    {questionTimer.playNotice2 && <Notice play={questionTimer.playNotice2} sound="/notification2.mp3" />} {/* カウントが0になったときの通知音を再生 */}
                </div>
                <button
                    onClick={() => questionTimer.resetTime(300)} // タイマーを300秒（5分）にリセット
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
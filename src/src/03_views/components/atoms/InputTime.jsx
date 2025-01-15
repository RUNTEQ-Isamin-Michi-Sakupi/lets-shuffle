import React, { useEffect } from 'react';
import useTimer from '../modules/Timer'; // Timerロジックをインポート
import Notice from '../modules/Notice'; // Noticeコンポーネントをインポート


const InputTime = ({ presentationTime, questionTime, firstNotification, secondNotification, volume, notificationSound }) => {
    // 登壇時間のタイマーを管理
    const presentationTimer = useTimer(presentationTime, firstNotification, secondNotification); // 初期値を親コンポーネントから受け取る
    // 質問時間のタイマーを管理
    const questionTimer = useTimer(questionTime, firstNotification, secondNotification); // 初期値を親コンポーネントから受け取る


    useEffect(() => {
        presentationTimer.resetTime(presentationTime);
    }, [presentationTime]);

    useEffect(() => {
        questionTimer.resetTime(questionTime);
    }, [questionTime]);

    const formatTime = (time) => {
        if (time < 0) {
            const absTime = Math.abs(time);
            const minutes = Math.floor(absTime / 60);
            const seconds = ('0' + (absTime % 60)).slice(-2);
            return `-${minutes}:${seconds}`;
        }
        const minutes = Math.floor(time / 60);
        const seconds = ('0' + (time % 60)).slice(-2);
        return `${minutes}:${seconds}`;
    };

    const getTimeStyle = (time) => {
        return {
            color: time < 0 ? 'red' : 'black',
        };
    };

    const getSoundFile = (sound, isSecondNotification) => {
        if (sound === 'ベル') {
            return isSecondNotification ? '/sounds/bell2.mp3' : '/sounds/bell1.mp3';
        } else if (sound === '校長') {
            return isSecondNotification ? '/sounds/principal2.mp3' : '/sounds/principal1.mp3';
        }
        return '/sounds/bell1.mp3';
    };

    const buttonStyle = {
        padding: '10px 20px', // 余白
        fontSize: '16px', // フォントサイズ
        width: '200px', // 幅
        textAlign: 'center', // 文字揃え
        borderRadius: '5px', // 角丸
        cursor: 'pointer', // マウスカーソルで指を表示
        transition: 'transform 0.2s', // 変形のトランジション
    };

    const handleMouseDown = (e) => {
        e.target.style.transform = 'scale(0.95)'; // クリック時の縮小
    };

    const handleMouseUp = (e) => {
        e.target.style.transform = 'scale(1)'; // クリック解除時の元のサイズに戻す
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            {/* 発表者セクション */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginLeft: '20px' }}>
                <button>
                    前の発表者
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
                    <p>
                        {/* 名前が動的に変化するためのIndexを渡す */}
                    </p>
                </div>
                <button>
                    次の発表者
                </button>

            </div>
            

            {/* 登壇時間セクション */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginLeft: '20px' }}>
                <button
                    onClick={() => presentationTimer.setIsCounting(true)}
                    style={{ ...buttonStyle, backgroundColor: '#000', border: '1px solid #fff',color: '#fff', fontWeight: 'bold' }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#444'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}
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
                    <div style={getTimeStyle(presentationTimer.time)}>{formatTime(presentationTimer.time)}</div>
                    {presentationTimer.playNotice1 && <Notice play={presentationTimer.playNotice1} sound={getSoundFile(notificationSound, false)} volume={volume} />} {/* 残り1分の通知音を再生 */}
                    {presentationTimer.playNotice2 && <Notice play={presentationTimer.playNotice2} sound={getSoundFile(notificationSound, true)} volume={volume} />} {/* カウントが0になったときの通知音を再生 */}
                </div>
                <button
                    onClick={() => presentationTimer.resetTime(presentationTime)} // タイマーをリセット
                    style={{ ...buttonStyle, backgroundColor: '#ff0000', border: '1px solid #fff', color: '#fff' ,fontWeight: 'bold'}}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#ff9999'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#ff0000'}

                >
                    登壇終了
                </button>
            </div>

            {/* 質問時間セクション */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginLeft: '20px' }}>
                <button
                    onClick={() => questionTimer.setIsCounting(true)} // カウントダウンを開始
                    style={{ ...buttonStyle, backgroundColor: '#008406', border: '1px solid #fff',color: '#fff' , fontWeight: 'bold'}}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#b2e0c9'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#008406'}

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
                    <div style={getTimeStyle(questionTimer.time)}>{formatTime(questionTimer.time)}</div>
                    {questionTimer.playNotice1 && <Notice play={questionTimer.playNotice1} sound={getSoundFile(notificationSound, false)} volume={volume} />} {/* 残り1分の通知音を再生 */}
                    {questionTimer.playNotice2 && <Notice play={questionTimer.playNotice2} sound={getSoundFile(notificationSound, true)} volume={volume} />} {/* カウントが0になったときの通知音を再生 */}
                </div>
                <button
                    onClick={() => questionTimer.resetTime(questionTime)} // タイマーをリセット
                    style={{ ...buttonStyle, backgroundColor: '#ee7800', border: '1px solid #fff',color: '#fff' , fontWeight: 'bold'}}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#ffc185'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#ee7800'}
                >
                    質問終了
                </button>
            </div>
        </div>
    );
};

export default InputTime;
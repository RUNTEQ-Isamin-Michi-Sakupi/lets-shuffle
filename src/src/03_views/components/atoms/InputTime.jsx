import React, { useEffect } from 'react';
import useTimer from '../modules/Timer'; // Timerロジックをインポート
import Notice from '../modules/Notice'; // Noticeコンポーネントをインポート
import Button from './Button';
import NowAnnouncer from './NowAnnouncer';
import './InputTime.css'; // CSSファイルをインポート

const InputTime = ({ presentationTime, questionTime, firstNotification, secondNotification, volume, notificationSound, nameArray, preAnnouncer, nextAnnouncer, announcerIndex }) => {
    // 登壇時間のタイマーを管理
    const presentationTimer = useTimer(presentationTime, firstNotification, secondNotification);
    // 質問時間のタイマーを管理
    const questionTimer = useTimer(questionTime, firstNotification, secondNotification);

    // 登壇時間が変更されたときにタイマーをリセット
    useEffect(() => {
        presentationTimer.resetTime(presentationTime);
    }, [presentationTime]);

    // 質問時間が変更されたときにタイマーをリセット
    useEffect(() => {
        questionTimer.resetTime(questionTime);
    }, [questionTime]);

    // 時間をフォーマットする関数
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

    // 時間のスタイルを取得する関数
    const getTimeStyle = (time) => {
        return {
            color: time < 0 ? 'red' : 'black',
        };
    };

    // 通知音のファイルパスを取得する関数
    const getSoundFile = (sound, isSecondNotification) => {
        if (sound === 'ベル') {
            return isSecondNotification ? '/sounds/bell2.mp3' : '/sounds/bell1.mp3';
        } else if (sound === '校長') {
            return isSecondNotification ? '/sounds/principal2.mp3' : '/sounds/principal1.mp3';
        }
        return '/sounds/bell1.mp3';
    };

    // ボタンを押したときのスタイル変更
    const handleMouseDown = (e) => {
        e.target.style.transform = 'scale(0.95)';
    };

    // ボタンを離したときのスタイル変更
    const handleMouseUp = (e) => {
        e.target.style.transform = 'scale(1)';
    };

    return (
        <div className="input-time-container">
            {/* 発表者セクション */}

            <div className="input-time-section">
                <Button name={"前の発表者"} func={preAnnouncer} />
                <div className="timer-display">
                    <NowAnnouncer names={nameArray} index={announcerIndex} />
                </div>
                <Button name={"次の発表者"} func={nextAnnouncer} />
            </div>

            {/* 登壇時間セクション */}
            <div className="input-time-section">
                <button
                    onClick={() => presentationTimer.setIsCounting(true)}
                    className="button button-presentation-start"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    登壇開始
                </button>
                <div className="timer-display">
                    <div>登壇時間</div>
                    <div style={getTimeStyle(presentationTimer.time)}>{formatTime(presentationTimer.time)}</div>
                    {presentationTimer.playNotice1 && <Notice play={presentationTimer.playNotice1} sound={getSoundFile(notificationSound, false)} volume={volume} />}
                    {presentationTimer.playNotice2 && <Notice play={presentationTimer.playNotice2} sound={getSoundFile(notificationSound, true)} volume={volume} />}
                </div>
                <button
                    onClick={() => presentationTimer.resetTime(presentationTime)}
                    className="button button-presentation-end"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    登壇終了
                </button>
            </div>

            {/* 質問時間セクション */}
            <div className="input-time-section">
                <button
                    onClick={() => questionTimer.setIsCounting(true)}
                    className="button button-question-start"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    質問開始
                </button>
                <div className="timer-display">
                    <div>質問時間</div>
                    <div style={getTimeStyle(questionTimer.time)}>{formatTime(questionTimer.time)}</div>
                    {questionTimer.playNotice1 && <Notice play={questionTimer.playNotice1} sound={getSoundFile(notificationSound, false)} volume={volume} />}
                    {questionTimer.playNotice2 && <Notice play={questionTimer.playNotice2} sound={getSoundFile(notificationSound, true)} volume={volume} />}
                </div>
                <button
                    onClick={() => questionTimer.resetTime(questionTime)}
                    className="button button-question-end"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    質問終了
                </button>
            </div>
        </div>
    );
};

export default InputTime;
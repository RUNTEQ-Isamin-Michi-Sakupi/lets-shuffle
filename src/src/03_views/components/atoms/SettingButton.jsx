import React, { useState } from 'react';
import Setting from '../blocks/Setting'; // 設定画面をインポート
import InputTime from '../atoms/InputTime'; // カウントダウンタイマーをインポート
import './SettingButton.css'; // CSSファイルをインポート

function SettingButton(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態を管理
    const [presentationTime, setPresentationTime] = useState(600); // 初期値600秒（10分）
    const [questionTime, setQuestionTime] = useState(300); // 初期値300秒（5分）
    const [firstNotification, setFirstNotification] = useState(60); // 初期値60秒（1分）
    const [secondNotification, setSecondNotification] = useState(0); // 初期値0秒
    const [volume, setVolume] = useState(50); // 初期値50%
    const [notificationSound, setNotificationSound] = useState('ベル'); // 初期値ベル

    // メニューの開閉を切り替える関数
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // メニューを閉じる関数
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // propsを取得
    const { nameArray, preAnnouncer, nextAnnouncer, announcerIndex } = props;

    return (
        <div style={{ position: 'relative' }}>
            {/* 設定ボタン */}
            <button
                onClick={toggleMenu}
                className="setting-button"
            >
                ⚙️
            </button>

            {/* 設定メニュー */}
            {isMenuOpen && (
                <div>
                    {/* オーバーレイ */}
                    <div
                        onClick={closeMenu}
                        className="overlay"
                    />
                    {/* 設定画面 */}
                    <div className="setting-menu">
                        <Setting
                            presentationTime={presentationTime}
                            setPresentationTime={setPresentationTime}
                            questionTime={questionTime}
                            setQuestionTime={setQuestionTime}
                            firstNotification={firstNotification}
                            setFirstNotification={setFirstNotification}
                            secondNotification={secondNotification}
                            setSecondNotification={setSecondNotification}
                            volume={volume}
                            setVolume={setVolume}
                            notificationSound={notificationSound}
                            setNotificationSound={setNotificationSound}
                            closeMenu={closeMenu} // メニューを閉じる関数を渡す
                        />
                    </div>
                </div>
            )}

            {/* カウントダウンタイマー */}
            <InputTime
                presentationTime={presentationTime}
                questionTime={questionTime}
                firstNotification={firstNotification}
                secondNotification={secondNotification}
                volume={volume}
                notificationSound={notificationSound}
                nameArray={nameArray}
                preAnnouncer={preAnnouncer}
                nextAnnouncer={nextAnnouncer}
                announcerIndex={announcerIndex}
            />
        </div>
    );
};

export default SettingButton;
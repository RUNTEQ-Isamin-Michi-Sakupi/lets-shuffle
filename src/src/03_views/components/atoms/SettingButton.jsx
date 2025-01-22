import React, { useState } from 'react';
import Setting from '../blocks/Setting'; // 設定画面をインポート
import InputTime from '../atoms/InputTime'; // カウントダウンタイマーをインポート
import './SettingButton.css'; // CSSファイルをインポート

function SettingButton(props) {

    const { isMenuOpen,
        presentationTime,
        questionTime,
        firstNotification,
        secondNotification,
        volume,
        notificationSound,
        toggleMenu,
        closeMenu,
        setPresentationTime,
        setQuestionTime,
        setFirstNotification,
        setSecondNotification,
        setVolume,
        setNotificationSound
     } = props

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

        </div>
    );
};

export default SettingButton;
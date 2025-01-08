import React, { useState } from 'react';
import Setting from '../blocks/Setting'; // 設定画面をインポート
import InputTime from '../atoms/InputTime'; // カウントダウンタイマーをインポート

const SettingButton = () => {
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

    return (
        <div style={{ position: 'relative' }}>
            {/* 設定ボタン */}
            <button
                onClick={toggleMenu}
                style={{
                    backgroundColor: '#fff', // 背景色
                    color: '#000', // テキストの色
                    border: 'none', // 枠線をなしに
                    borderRadius: '50%', // 角丸（円形にする）
                    padding: '10px', // 余白
                    fontSize: '24px', // フォントサイズ
                    cursor: 'pointer', // マウスカーソルで指を表示
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // ボックスシャドウ
                    transition: 'background-color 0.3s ease', // 背景色のトランジション
                    width: '50px', // ボタンの幅
                    height: '50px', // ボタンの高さ
                    display: 'flex', // アイコンを中央に配置
                    justifyContent: 'center', // アイコンを中央に配置
                    alignItems: 'center', // アイコンを中央に配置
                    marginLeft: '20px', // ボタンの左側に余白を設定
                    marginBottom: '20px', // ボタンの下側に余白を設定
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ADD8E6'} // ホバー時の背景色
                onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'} // ホバー解除時の背景色
            >
                ⚙️
            </button>

            {/* 設定メニュー */}
            {isMenuOpen && (
                <div>
                    {/* オーバーレイ */}
                    <div
                        onClick={closeMenu}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 999,
                        }}
                    />
                    {/* 設定画面 */}
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                            zIndex: 1000,
                            width: '300px', // メニューの幅
                        }}
                    >
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
            />
        </div>
    );
};

export default SettingButton;
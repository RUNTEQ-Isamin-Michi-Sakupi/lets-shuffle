import React, { useState } from 'react';
import Setting from '../blocks/Setting'; // 設定画面をインポート
import InputTime from '../atoms/InputTime'; // カウントダウンタイマーをインポート

const SettingButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態を管理
    const [presentationTime, setPresentationTime] = useState(600); // 初期値600秒（10分）
    const [questionTime, setQuestionTime] = useState(300); // 初期値300秒（5分）
    const [firstNotification, setFirstNotification] = useState(60); // 初期値60秒（1分）
    const [secondNotification, setSecondNotification] = useState(0); // 初期値0秒

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
                    color: '#fff', // テキストの色
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
                <div
                    style={{
                        position: 'absolute',
                        top: '60px', // ボタンの下に表示
                        left: '0',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '15px',
                        zIndex: 100,
                        width: '250px', // メニューの幅
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
                        closeMenu={closeMenu} // メニューを閉じる関数を渡す
                    />
                </div>
            )}

            {/* カウントダウンタイマー */}
            <InputTime
                presentationTime={presentationTime}
                questionTime={questionTime}
                firstNotification={firstNotification}
                secondNotification={secondNotification}
            />
        </div>
    );
};

export default SettingButton;
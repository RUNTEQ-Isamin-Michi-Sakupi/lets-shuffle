import React, { useState } from 'react';

const Setting = ({ presentationTime, setPresentationTime, questionTime, setQuestionTime, firstNotification, setFirstNotification, secondNotification, setSecondNotification, volume, setVolume, notificationSound, setNotificationSound, closeMenu }) => {
    const [localPresentationTime, setLocalPresentationTime] = useState(presentationTime / 60); // 分単位で管理
    const [localQuestionTime, setLocalQuestionTime] = useState(questionTime / 60); // 分単位で管理
    const [localFirstNotification, setLocalFirstNotification] = useState(firstNotification / 60); // 分単位で管理
    const [localSecondNotification, setLocalSecondNotification] = useState(secondNotification / 60); // 分単位で管理
    const [localVolume, setLocalVolume] = useState(volume); // 音量
    const [localNotificationSound, setLocalNotificationSound] = useState(notificationSound); // 通知音

    const handleSave = () => {
        setPresentationTime(localPresentationTime * 60); // 秒単位に変換して保存
        setQuestionTime(localQuestionTime * 60); // 秒単位に変換して保存
        setFirstNotification(localFirstNotification * 60); // 秒単位に変換して保存
        setSecondNotification(localSecondNotification * 60); // 秒単位に変換して保存
        setVolume(localVolume); // 音量を保存
        setNotificationSound(localNotificationSound); // 通知音を保存
        console.log({
            presentationTime: localPresentationTime * 60,
            questionTime: localQuestionTime * 60,
            firstNotification: localFirstNotification * 60,
            secondNotification: localSecondNotification * 60,
            volume: localVolume,
            notificationSound: localNotificationSound,
        });
        alert('設定を保存しました！');
        closeMenu(); // メニューを閉じる
    };

    const handleReset = () => { // リセットボタンを押したときの処理
        setLocalPresentationTime(10); // 分単位で初期値を設定
        setLocalQuestionTime(5); // 分単位で初期値を設定
        setLocalFirstNotification(1); // 分単位で初期値を設定
        setLocalSecondNotification(0); // 分単位で初期値を設定
        setLocalNotificationSound('ベル'); // 初期値を設定
        setLocalVolume(50);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', width: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>設定画面</h2>

            {/* 登壇時間 */}
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label style={{ marginRight: '10px', color: '#555' }}>登壇時間</label>
                <input
                    type="number"
                    value={localPresentationTime}
                    onChange={(e) => setLocalPresentationTime(Number(e.target.value))}
                    style={{
                        width: '60px',
                        padding: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
                <span style={{ marginLeft: '5px', color: '#555' }}>min</span>
            </div>

            {/* 質問時間 */}
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label style={{ marginRight: '10px', color: '#555' }}>質問時間</label>
                <input
                    type="number"
                    value={localQuestionTime}
                    onChange={(e) => setLocalQuestionTime(Number(e.target.value))}
                    style={{
                        width: '60px',
                        padding: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
                <span style={{ marginLeft: '5px', color: '#555' }}>min</span>
            </div>

            {/* 残り時間通知 */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#555' }}>残り時間通知</label>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '10px', color: '#555' }}>通知1回目</label>
                    <input
                        type="number"
                        value={localFirstNotification}
                        onChange={(e) => setLocalFirstNotification(Number(e.target.value))}
                        style={{
                            width: '60px',
                            padding: '5px',
                            textAlign: 'center',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <span style={{ marginLeft: '5px', color: '#555' }}>min</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '10px', color: '#555' }}>通知2回目</label>
                    <input
                        type="number"
                        value={localSecondNotification}
                        onChange={(e) => setLocalSecondNotification(Number(e.target.value))}
                        style={{
                            width: '60px',
                            padding: '5px',
                            textAlign: 'center',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <span style={{ marginLeft: '5px', color: '#555' }}>min</span>
                </div>
            </div>

            {/* 通知音 */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#555' }}>通知音</label>
                <div>
                    {['ベル', '校長'].map((sound) => (
                        <div key={sound} style={{ display: 'inline-block', marginRight: '10px' }}>
                            <label style={{ color: '#555' }}>
                                <input
                                    type="radio"
                                    value={sound}
                                    checked={localNotificationSound === sound}
                                    onChange={(e) => setLocalNotificationSound(e.target.value)}
                                />
                                {sound}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* 音量 */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#555' }}>音量</label>
                <input
                    type="range"
                    value={localVolume}
                    onChange={(e) => setLocalVolume(Number(e.target.value))}
                    min="0"
                    max="100"
                    style={{ width: '200px' }}
                />
            </div>

            {/* 保存ボタン */}
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <button
                    onClick={handleSave}
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}
                >
                    保存
                </button>
                <button
                    onClick={handleReset}
                    style={{
                        backgroundColor: '#ffc0c0',
                        color: '#000',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    リセット
                </button>
            </div>
        </div>
    );
};

export default Setting;
import React, { useState } from 'react';

const Setting = () => {
    const [presentationTime, setPresentationTime] = useState(10); // 登壇時間（分）
    const [questionTime, setQuestionTime] = useState(5); // 質問時間（分）
    const [firstNotification, setFirstNotification] = useState(1); // 最初の通知時間（分）
    const [secondNotification, setSecondNotification] = useState(0); // 2回目の通知時間（分）
    const [notificationSound, setNotificationSound] = useState('校長'); // 通知音
    const [volume, setVolume] = useState(50); // 音量

    const handleSave = () => {
        console.log({
            presentationTime,
            questionTime,
            firstNotification,
            secondNotification,
            notificationSound,
            volume,
        });
        alert('設定を保存しました！');
    };

    const handleReset = () => {
        setPresentationTime(10);
        setQuestionTime(5);
        setFirstNotification(1);
        setSecondNotification(-1);
        setNotificationSound('校長');
        setVolume(50);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', width: '300px' }}>
            <h2 style={{ textAlign: 'center' }}>設定画面</h2>

            {/* 登壇時間 */}
            <div style={{ marginBottom: '10px' }}>
                <label>登壇時間</label>
                <input
                    type="number"
                    value={presentationTime}
                    onChange={(e) => setPresentationTime(Number(e.target.value))}
                    style={{
                        width: '50px',
                        marginLeft: '10px',
                        marginRight: '5px',
                    }}
                />
                min
            </div>

            {/* 質問時間 */}
            <div style={{ marginBottom: '10px' }}>
                <label>質問時間</label>
                <input
                    type="number"
                    value={questionTime}
                    onChange={(e) => setQuestionTime(Number(e.target.value))}
                    style={{
                        width: '50px',
                        marginLeft: '10px',
                        marginRight: '5px',
                    }}
                />
                min
            </div>

            {/* 残り時間通知 */}
            <div style={{ marginBottom: '10px' }}>
                <label>残り時間通知</label>
                <div>
                    <label>
                        通知1回目
                        <input
                            type="number"
                            value={firstNotification}
                            onChange={(e) => setFirstNotification(Number(e.target.value))}
                            style={{
                                width: '50px',
                                marginLeft: '10px',
                                marginRight: '5px',
                            }}
                        />
                        min
                    </label>
                </div>
                <div>
                    <label>
                        通知2回目 オーバー時
                        <input
                            type="number"
                            value={secondNotification}
                            onChange={(e) => setSecondNotification(Number(e.target.value))}
                            style={{
                                width: '50px',
                                marginLeft: '10px',
                                marginRight: '5px',
                            }}
                        />
                        min
                    </label>
                </div>
            </div>

            {/* 通知音 */}
            <div style={{ marginBottom: '10px' }}>
                <label>通知音</label>
                <div>
                    {['校長', 'ベル'].map((sound) => (
                        <div key={sound}>
                            <label>
                                <input
                                    type="radio"
                                    value={sound}
                                    checked={notificationSound === sound}
                                    onChange={(e) => setNotificationSound(e.target.value)}
                                />
                                {sound}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* 音量 */}
            <div style={{ marginBottom: '10px' }}>
                <label>音量</label>
                <input
                    type="range"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    min="0"
                    max="100"
                    style={{ marginLeft: '10px', width: '200px' }}
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
                    設定保存
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
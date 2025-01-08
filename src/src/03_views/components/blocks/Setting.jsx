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

    const increment = (setter, value) => {
        setter(value + 1);
    };

    const decrement = (setter, value) => {
        setter(value - 1);
    };

    const handleInputChange = (e, setter) => {
        const value = e.target.value;
        if (!isNaN(value) || value === '-') { // 数値または負の符号のみ許可
            setter(Number(value));
        }
    };

    const getInputStyle = (value) => {
        return {
            ...inputStyle,
            color: value < 0 ? 'red' : 'black'
        };
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>設定画面</h2>

            {/* 登壇時間 */}
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label style={{ marginRight: '10px', color: '#555' }}>登壇時間</label>
                <button onClick={() => decrement(setLocalPresentationTime, localPresentationTime)} style={buttonStyle}>-</button>
                <input
                    type="text"
                    value={localPresentationTime}
                    onChange={(e) => handleInputChange(e, setLocalPresentationTime)}
                    style={getInputStyle(localPresentationTime)}
                />
                <button onClick={() => increment(setLocalPresentationTime, localPresentationTime)} style={buttonStyle}>+</button>
                <span style={{ marginLeft: '5px', color: '#555', fontWeight: 'bold' }}>分</span>
            </div>

            {/* 質問時間 */}
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label style={{ marginRight: '10px', color: '#555' }}>質問時間</label>
                <button onClick={() => decrement(setLocalQuestionTime, localQuestionTime)} style={buttonStyle}>-</button>
                <input
                    type="text"
                    value={localQuestionTime}
                    onChange={(e) => handleInputChange(e, setLocalQuestionTime)}
                    style={getInputStyle(localQuestionTime)}
                />
                <button onClick={() => increment(setLocalQuestionTime, localQuestionTime)} style={buttonStyle}>+</button>
                <span style={{ marginLeft: '5px', color: '#555', fontWeight: 'bold' }}>分</span>
            </div>

            {/* 残り時間通知 */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#555' }}>残り時間通知</label>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '10px', color: '#555' }}>通知1回目</label>
                    <button onClick={() => decrement(setLocalFirstNotification, localFirstNotification)} style={buttonStyle}>-</button>
                    <input
                        type="text"
                        value={localFirstNotification}
                        onChange={(e) => handleInputChange(e, setLocalFirstNotification)}
                        style={getInputStyle(localFirstNotification)}
                    />
                    <button onClick={() => increment(setLocalFirstNotification, localFirstNotification)} style={buttonStyle}>+</button>
                    <span style={{ marginLeft: '5px', color: '#555', fontWeight: 'bold' }}>分</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '10px', color: '#555' }}>通知2回目</label>
                    <button onClick={() => decrement(setLocalSecondNotification, localSecondNotification)} style={buttonStyle}>-</button>
                    <input
                        type="text"
                        value={localSecondNotification}
                        onChange={(e) => handleInputChange(e, setLocalSecondNotification)}
                        style={getInputStyle(localSecondNotification)}
                    />
                    <button onClick={() => increment(setLocalSecondNotification, localSecondNotification)} style={buttonStyle}>+</button>
                    <span style={{ marginLeft: '5px', color: '#555', fontWeight: 'bold' }}>分</span>
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
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label style={{ marginRight: '10px', color: '#555' }}>音量</label>
                <button onClick={() => decrement(setLocalVolume, localVolume)} style={buttonStyle}>-</button>
                <input
                    type="text"
                    value={localVolume}
                    onChange={(e) => handleInputChange(e, setLocalVolume)}
                    style={inputStyle}
                />
                <button onClick={() => increment(setLocalVolume, localVolume)} style={buttonStyle}>+</button>
                <span style={{ marginLeft: '5px', color: '#555', fontWeight: 'bold' }}>%</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button onClick={handleSave} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>保存</button>
                <button onClick={handleReset} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>リセット</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '5px 10px',
    margin: '0 5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold', // ボタンのテキストを太字にする
};

const inputStyle = {
    width: '60px',
    padding: '5px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid #ccc',
    MozAppearance: 'textfield', // スピンボタンを削除するスタイル
    WebkitAppearance: 'none',
    margin: 0,
    fontWeight: 'bold', // 数字を太字にする
};

export default Setting;
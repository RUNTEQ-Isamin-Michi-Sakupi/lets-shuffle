import React, { useState } from 'react'; // useStateフックをインポート

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
        if (value > 0 || setter === setLocalFirstNotification || setter === setLocalSecondNotification) {
            setter(value - 1);
        }
    };

    const handleInputChange = (e, setter, allowNegative = true) => {
        const value = e.target.value;
        if (!isNaN(value) && (allowNegative || value >= 0)) { // 数値のみ許可、負の値を許可するかどうか
            setter(Number(value));
        }
    };

    const getInputStyle = (value) => { // 数値がマイナスの場合は赤色にする
        return {
            ...inputStyle,
            color: value < 0 ? 'red' : 'black'
        };
    };

    const handleVolumeChange = (e) => { // 音量を変更する関数
        const value = Number(e.target.value);
        setLocalVolume(value);
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontSize: '30px' }}>設定画面</h2>

            {/* 登壇時間 */}
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label style={{ marginRight: '10px', color: '#000', fontWeight: 'bold', fontSize: '20px' }}>登壇時間</label>
                <button onClick={() => decrement(setLocalPresentationTime, localPresentationTime)} style={buttonStyle}>-</button>
                <input
                    type="text"
                    value={localPresentationTime}
                    onChange={(e) => handleInputChange(e, setLocalPresentationTime, false)}
                    style={{ ...inputStyle, fontSize: '20px' }} // 数字のサイズを大きくした
                />
                <button onClick={() => increment(setLocalPresentationTime, localPresentationTime)} style={buttonStyle}>+</button>
                <span style={{ marginLeft: '5px', color: '#000', fontWeight: 'bold' }}>分</span>
            </div>

            {/* 質問時間 */}
            <div style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label style={{ marginRight: '10px', color: '#000', fontWeight: 'bold', fontSize: '20px' }}>質問時間</label>
                <button onClick={() => decrement(setLocalQuestionTime, localQuestionTime)} style={buttonStyle}>-</button>
                <input
                    type="text"
                    value={localQuestionTime}
                    onChange={(e) => handleInputChange(e, setLocalQuestionTime, false)}
                    style={{ ...inputStyle, fontSize: '20px' }} // 数字のサイズを大きくした
                />
                <button onClick={() => increment(setLocalQuestionTime, localQuestionTime)} style={buttonStyle}>+</button>
                <span style={{ marginLeft: '5px', color: '#000', fontWeight: 'bold' }}>分</span>
            </div>

            {/* 残り時間通知 */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#000', fontWeight: 'bold', fontSize: '20px' }}>残り時間通知</label>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '10px', color: '#000', fontWeight: 'bold', fontSize: '20px' }}>通知1回目</label>
                    <button onClick={() => decrement(setLocalFirstNotification, localFirstNotification)} style={buttonStyle}>-</button>
                    <input
                        type="text"
                        value={localFirstNotification}
                        onChange={(e) => handleInputChange(e, setLocalFirstNotification)}
                        style={{ ...getInputStyle(localFirstNotification), fontSize: '20px' }}
                    />
                    <button onClick={() => increment(setLocalFirstNotification, localFirstNotification)} style={buttonStyle}>+</button>
                    <span style={{ marginLeft: '5px', color: '#000', fontWeight: 'bold' }}>分</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '10px', color: '#000', fontWeight: 'bold', fontSize: '20px' }}>通知2回目</label>
                    <button onClick={() => decrement(setLocalSecondNotification, localSecondNotification)} style={buttonStyle}>-</button>
                    <input
                        type="text"
                        value={localSecondNotification}
                        onChange={(e) => handleInputChange(e, setLocalSecondNotification)}
                        style={{ ...getInputStyle(localSecondNotification), fontSize: '20px' }}
                    />
                    <button onClick={() => increment(setLocalSecondNotification, localSecondNotification)} style={buttonStyle}>+</button>
                    <span style={{ marginLeft: '5px', color: '#000', fontWeight: 'bold' }}>分</span>
                </div>
            </div>

            {/* 通知音 */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#000', fontWeight: 'bold', fontSize: '20px' }}>通知音</label>
                <div>
                    {['ベル', '校長'].map((sound) => (
                        <div key={sound} style={{ display: 'inline-block', marginRight: '10px', fontWeight: 'bold', fontSize: '20px' }}>
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
                <label style={{ marginRight: '10px', color: '#000', fontWeight: 'bold', fontSize: '20px' }}>音量</label>
                <button onClick={() => decrement(setLocalVolume, localVolume)} style={buttonStyle}>-</button>
                <input
                    type="text"
                    value={localVolume}
                    onChange={(e) => handleInputChange(e, setLocalVolume)}
                    style={{ ...inputStyle, fontSize: '20px' }}
                />
                <button onClick={() => increment(setLocalVolume, localVolume)} style={buttonStyle}>+</button>
                <span style={{ marginLeft: '5px', color: '#000', fontWeight: 'bold' }}>%</span>
            </div>

            {/* 音量スライダー */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={localVolume}
                    onChange={handleVolumeChange}
                    style={{ width: '80%' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button
                    onClick={handleSave} // 保存ボタンを押したときの処理
                    style={{
                        padding: '10px 20px', // ボタンの余白
                        backgroundColor: '#4CAF50', // ボタンの背景色
                        color: '#fff', // ボタンのテキストの色
                        border: 'none', // ボタンの枠線をなしにする
                        borderRadius: '5px', // ボタンを角丸に
                        cursor: 'pointer', // マウスカーソルで指を表示
                        fontWeight: 'bold', // ボタンのテキストを太字にする
                        fontSize: '15px', // ボタンのフォントサイズ
                        transition: 'background-color 0.3s' // ホバー時の背景色の変化をスムーズにする
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'} // ホバー時の背景色
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'} // ホバー解除時の背景色
                >
                    保存
                </button>
                <button
                    onClick={handleReset} // リセットボタンを押したときの処理
                    style={{
                        padding: '10px 20px', // ボタンの余白
                        backgroundColor: '#f44336', // ボタンの背景色
                        color: '#fff', // ボタンのテキストの色
                        border: 'none', // ボタンの枠線をなしにする
                        borderRadius: '5px', // ボタンを角丸に
                        cursor: 'pointer', // マウスカーソルで指を表示
                        fontWeight: 'bold', // ボタンのテキストを太字にする
                        fontSize: '15px', // ボタンのフォントサイズ
                        transition: 'background-color 0.3s' // ホバー時の背景色の変化をスムーズにする
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e53935'} // ホバー時の背景色
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'} // ホバー解除時の背景色
                >
                    初期設定
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '5px 10px', // ボタンの余白
    margin: '0 5px', // ボタンの間隔
    backgroundColor: '#007bff',
    color: '#fff', // ボタンのテキストの色
    border: 'none', // ボタンの枠線をなしにする
    borderRadius: '5px', // ボタンを角丸に
    cursor: 'pointer', // マウスカーソルで指を表示
    fontWeight: 'bold', // ボタンのテキストを太字にする
    fontSize: '20px', // ボタンのフォントサイズを大きくする
};

const inputStyle = {
    width: '60px', // 入力欄の幅
    padding: '5px', // 入力欄の余白
    textAlign: 'center', // 入力された数字を中央揃え
    borderRadius: '5px', // 入力欄を角丸に
    border: '1px solid #ccc', // 枠線を設定
    MozAppearance: 'textfield', // スピンボタンを削除するスタイル
    WebkitAppearance: 'none', // スピンボタンを削除するスタイル
    margin: 0, // マージンをなしにする
    fontWeight: 'bold', // 数字を太字にする
};

export default Setting; // Settingコンポーネントをエクスポート
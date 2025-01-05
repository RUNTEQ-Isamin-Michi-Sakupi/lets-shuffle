import React, { useState, useEffect } from 'react'; // ReactライブラリからuseStateとuseEffectをインポート

const InputTime = () => {
    // 登壇時間の初期値を600秒（10分）に設定
    const [presentationTime, setPresentationTime] = useState(600);
    const [isPresentationCounting, setIsPresentationCounting] = useState(false);

    // 質問時間の初期値を300秒（5分）に設定
    const [questionTime, setQuestionTime] = useState(300);
    const [isQuestionCounting, setIsQuestionCounting] = useState(false);

    // 登壇時間のカウントダウンロジック
    useEffect(() => {
        let timer;
        if (isPresentationCounting && presentationTime > 0) {
            timer = setInterval(() => {
                setPresentationTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (presentationTime === 0) {
            setIsPresentationCounting(false);
        }
        return () => clearInterval(timer);
    }, [isPresentationCounting, presentationTime]);

    // 質問時間のカウントダウンロジック
    useEffect(() => {
        let timer;
        if (isQuestionCounting && questionTime > 0) {
            timer = setInterval(() => {
                setQuestionTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (questionTime === 0) {
            setIsQuestionCounting(false);
        }
        return () => clearInterval(timer);
    }, [isQuestionCounting, questionTime]);

    // 登壇時間をリセットする関数
    const resetPresentationTime = () => {
        setIsPresentationCounting(false);
        setPresentationTime(600); // 登壇時間を600秒にリセット
    };

    // 質問時間をリセットする関数
    const resetQuestionTime = () => {
        setIsQuestionCounting(false);
        setQuestionTime(300); // 質問時間を300秒にリセット
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            {/* 登壇時間セクション */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginLeft: '20px' }}>
                {/* 登壇開始ボタン */}
                <button
                    onClick={() => setIsPresentationCounting(true)} // 登壇開始ボタンをクリックしたときにカウントダウンを開始
                    style={{ // ボタンのスタイルを設定
                        backgroundColor: '#d1e7ff', // 背景色を設定
                        border: '1px solid #007bff', // 枠線のスタイル
                        borderRadius: '5px', // 角丸にする
                        padding: '10px 20px', // パディングを設定
                        fontSize: '16px', // フォントサイズを設定
                        width: '200px', // 幅を設定
                        textAlign: 'center', // テキストを中央揃えにする
                        cursor: 'pointer', // カーソルを指に変更
                    }}
                >
                    登壇開始
                </button>
                {/* 登壇時間の表示 */}
                <div
                    style={{
                        display: 'flex', // flexboxを使用して要素を並べる
                        flexDirection: 'column', // 縦方向に並べる
                        justifyContent: 'center', // 要素を中央揃えにする
                        alignItems: 'center', // 要素を中央揃えにする
                        width: '200px', // 幅を設定
                        height: '100px', // 高さを設定
                        border: '1px solid #000', // 枠線のスタイル
                        borderRadius: '5px', // 角丸にする
                        backgroundColor: '#fff', // 背景色を設定
                        fontSize: '24px', // フォントサイズを設定
                        fontWeight: 'bold', // フォントの太さを設定
                        color: '#000', // テキストの色を設定
                    }}
                >
                    <div>登壇時間</div>
                    <div>{Math.floor(presentationTime / 60)}:{('0' + (presentationTime % 60)).slice(-2)}</div> {/* 残り時間を表示 */}
                </div>
                {/* 登壇終了ボタン */}
                <button
                    onClick={resetPresentationTime} // 登壇終了ボタンをクリックしたときに登壇時間をリセット
                    style={{
                        backgroundColor: '#ffd1d1', // 背景色を設定
                        border: '1px solid #ff0000', // 枠線のスタイル
                        borderRadius: '5px', // 角丸にする
                        padding: '10px 20px', // パディングを設定
                        fontSize: '16px', // フォントサイズを設定
                        width: '200px', // 幅を設定
                        textAlign: 'center', // テキストを中央揃えにする
                        cursor: 'pointer', // カーソルを指に変更
                    }}
                >
                    登壇終了
                </button>
            </div>

            {/* 質問時間セクション */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginLeft: '20px' }}>
                {/* 質問開始ボタン */}
                <button
                    onClick={() => setIsQuestionCounting(true)} // 質問開始ボタンをクリックしたときにカウントダウンを開始
                    style={{
                        backgroundColor: '#d4edda', // 背景色を設定
                        border: '1px solid #28a745', // 枠線のスタイル
                        borderRadius: '5px', // 角丸にする
                        padding: '10px 20px', // パディングを設定
                        fontSize: '16px', // フォントサイズを設定
                        width: '200px', // 幅を設定
                        textAlign: 'center', // テキストを中央揃えにする
                        cursor: 'pointer', // カーソルを指に変更
                    }}
                >
                    質問開始
                </button>
                {/* 質問時間の表示 */}
                <div
                    style={{
                        display: 'flex', // flexboxを使用して要素を並べる
                        flexDirection: 'column', // 縦方向に並べる
                        justifyContent: 'center', // 要素を中央揃えにする
                        alignItems: 'center', // 要素を中央揃えにする
                        width: '200px', // 幅を設定
                        height: '100px', // 高さを設定
                        border: '1px solid #000', // 枠線のスタイル
                        borderRadius: '5px', // 角丸にする
                        backgroundColor: '#fff', // 背景色を設定
                        fontSize: '24px', // フォントサイズを設定
                        fontWeight: 'bold', // フォントの太さを設定
                        color: '#000', // テキストの色を設定
                    }}
                >
                    <div>質問時間</div>
                    <div>
                        {Math.floor(questionTime / 60)}:
                        {('0' + (questionTime % 60)).slice(-2)} {/* 残り時間を表示 */}
                    </div>
                </div>
                {/* 質問終了ボタン */}
                <button
                    onClick={resetQuestionTime} // 質問終了ボタンをクリックしたときに質問時間をリセット
                    style={{
                        backgroundColor: '#ffd1d1', // 背景色を設定
                        border: '1px solid #ff0000', // 枠線のスタイル
                        borderRadius: '5px', // 角丸にする
                        padding: '10px 20px', // パディングを設定   
                        fontSize: '16px', // フォントサイズを設定
                        width: '200px', // 幅を設定
                        textAlign: 'center', // テキストを中央揃えにする
                        cursor: 'pointer', // カーソルを指に変更
                    }}
                >
                    質問終了
                </button>
            </div>
        </div>
    );
};

export default InputTime; // 他のファイルで使用できるようにInputTimeコンポーネントをエクスポート
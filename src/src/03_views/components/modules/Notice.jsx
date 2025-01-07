import React, { useEffect } from 'react';

const Notice = ({ play, sound, volume }) => {
    useEffect(() => {
        if (play) {
            const audio = new Audio(sound);
            audio.volume = volume / 100; // 音量を設定
            audio.play();
        }
    }, [play, sound, volume]);

    return null;
};

export default Notice;
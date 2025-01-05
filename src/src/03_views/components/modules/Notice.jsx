import React, { useEffect } from 'react';

const Notice = ({ play, sound }) => {
    useEffect(() => {
        if (play) {
            const audio = new Audio(sound);
            audio.play();
        }
    }, [play, sound]);

    return null;
};

export default Notice;
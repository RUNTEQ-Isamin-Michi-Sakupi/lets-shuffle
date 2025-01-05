import React, { useEffect } from 'react';

const Notice = ({ play }) => {
    useEffect(() => {
        if (play) {
            const audio = new Audio('/notification.mp3');
            audio.play();
        }
    }, [play]);

    return null;
};

export default Notice;
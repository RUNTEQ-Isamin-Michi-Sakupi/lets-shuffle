import React from 'react';

const HowToUse = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={videoContainerStyle}>
        <button onClick={onClose} style={closeButtonStyle}>✖</button>
        <video width="1050" controls autoPlay> {/* 幅を800pxに変更 */}
          <source src={`${process.env.PUBLIC_URL}/how_to_use.mp4`} type="video/mp4" />
          お使いのブラウザは動画タグに対応していません。
        </video>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const videoContainerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '-35px', // さらに外に出す
  right: '-35px', // さらに外に出す
  backgroundColor: '#ff5c5c',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '24px',
  color: '#fff',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default HowToUse;

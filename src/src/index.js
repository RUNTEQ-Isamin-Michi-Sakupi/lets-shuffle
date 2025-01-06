import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './03_views/components/blocks/Header';
import App from './App';
import Footer from './03_views/components/blocks/Footer';
import SettingButton from './03_views/components/atoms/SettingButton'; // 設定画面を表示するコンポーネント みちが追加
import reportWebVitals from './reportWebVitals';
import Body from './03_views/components/blocks/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
    <SettingButton /> {/* 設定画面を表示するボタン */}
    {/* ここに現在の発表者を追加する */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

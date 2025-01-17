import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './03_views/components/blocks/Header';
import Body from './03_views/components/blocks/Body';
import Footer from './03_views/components/blocks/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
    {/* ここに現在の発表者を追加する */}
    <Footer />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

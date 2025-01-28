import React from 'react'; //背景画像用のテストコード
import SettingButtonContiner from '../molecules/SettingButtonContiner';
import ShuffleContainer from '../molecules/ShuffleContainr';
import DisplayNameContainer from '../molecules/DisplayNameContainer';
import { useAnnouncer } from '../../../02_hook/useAnnouncer';


import { useState } from 'react';
import HowToUseButton from '../atoms/HowToUseButton';
import SettingButton from '../atoms/SettingButton'


const Body = () => {

  // const  { nameArray, allOpen, everyOpen, flipCard, isFlippedArray, announcerIndex, preAnnouncer, nextAnnouncer} = useAnnouncer();

  // useAnnouncerの値を受け取る
  const  { nameArray, allOpen, isFlippedArray,announcerIndex, preAnnouncer, nextAnnouncer} = useAnnouncer();

  // SettingButtonのプロパティ
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態を管理
  const [presentationTime, setPresentationTime] = useState(600); // 初期値600秒（10分）
  const [questionTime, setQuestionTime] = useState(300); // 初期値300秒（5分）
  const [firstNotification, setFirstNotification] = useState(60); // 初期値60秒（1分）
  const [secondNotification, setSecondNotification] = useState(0); // 初期値0秒
  const [volume, setVolume] = useState(50); // 初期値50%
  const [notificationSound, setNotificationSound] = useState('ベル'); // 初期値ベル

  // SettingButtonの関数
  // メニューの開閉を切り替える関数
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  // メニューを閉じる関数
  const closeMenu = () => {
      setIsMenuOpen(false);
  };

  // headerのデザイン
  const Header_style = {
    backgroundImage: 'url(/img/header.png)',
    backgroundSize: 'cover', // 画像をコンテナ全体にカバー
    backgroundPosition: 'center', // 画像を中央に配置
    backgroundRepeat: 'no-repeat', // 画像を繰り返さない
    width: '100vw', // ビューポートの幅
    height: '13vh', // ビューポートの高さ
    position: 'fixed'
  }

  const bodyStyle = {
    backgroundImage: 'url(/img/background.png)', // 背景画像のパス
    backgroundSize: 'cover', // 画像をコンテナ全体にカバー
    backgroundPosition: 'center', // 画像を中央に配置
    backgroundRepeat: 'no-repeat', // 画像を繰り返さない
    width: '100vw', // ビューポートの幅
    height: '100vh', // ビューポートの高さ
    position: 'fixed', // 固定位置
    zIndex: '-1', // 背景を一番後ろに表示
  };

  const containerStyle = {
    marginTop: '15vh',
    display: 'flex',
    width: '100vw',
    height: '82vh'
  }

  return (
    <>
      <div style={Header_style}>
        <SettingButton
        isMenuOpen={isMenuOpen}
        presentationTime={presentationTime}
        questionTime={questionTime}
        firstNotification={firstNotification}
        secondNotification={secondNotification}
        volume={volume}
        notificationSound={notificationSound}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        setPresentationTime={setPresentationTime}
        setQuestionTime={setQuestionTime}
        setFirstNotification={setFirstNotification}
        setSecondNotification={setSecondNotification}
        setVolume={setVolume}
        setNotificationSound={setNotificationSound}
        />
        <HowToUseButton />
      </div>
      <div style={bodyStyle}>
        {/* コンテンツをここに追加 */}
        <div style={containerStyle}>
          <SettingButtonContiner
            presentationTime={presentationTime}
            questionTime={questionTime}
            firstNotification={firstNotification}
            secondNotification={secondNotification}
            volume={volume}
            notificationSound={notificationSound}
            nameArray={nameArray}
            preAnnouncer={preAnnouncer}
            nextAnnouncer={nextAnnouncer}
            announcerIndex={announcerIndex}
            isFlippedArray={isFlippedArray}
          />
          <ShuffleContainer 
            nameArray={nameArray}
            allOpen={allOpen}
            isFlippedArray={isFlippedArray} 
            // everyOpen={everyOpen}
            // flipCard={flipCard}
          />
          <DisplayNameContainer />
        </div>
      </div>
    </>
  );
};

export default Body;


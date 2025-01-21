import React from 'react'
import InputName from '../atoms/InputName';
import OutputName from '../atoms/OutputName';
import Button from '../atoms/Button';
import Copy from '../modules/Copy';
import { useVisible } from '../../../02_hook/useVisible'

const DisplayNameContainer = () => {

  // useStateを取得
  const  [ isVisible, setIsVisible, handleButtonClick ] = useVisible()

    const displayNameContainerStyle = {
        marginTop: '20px',
        display: 'flex',
        marginRight: '0.5vw'
      }

    const buttonConatiner = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginRight: '2vw'
    }

    const inputnameContainer = {
      marginLeft: '2.5px',
      marginRight: '5px',
      width: '10vw',
    }

    const outputnameContainer = {
      marginLeft: '2.5px',
      marginRight: '30px',
      width: '10vw'
    }

    const buttonStyle = {
      margin:'10px',
      padding: '10px 20px', // 余白
      fontSize: '10px', // フォントサイズ
      width: '9vw', // 幅
      textAlign: 'center', // 文字揃え
      borderRadius: '5px', // 角丸
      cursor: 'pointer', // マウスカーソルで指を表示
      transition: 'transform 0.2s', // 変形のトランジション
    }

    if (isVisible){
      return (
        <div>
          <div style={buttonConatiner}>
              <Button 
              name={"登壇者名を非表示"}
              func={handleButtonClick}
              style={buttonStyle}
              />
              <Button
              name={"発表順をコピー"}
              func={Copy}
              style={buttonStyle}
              />
          </div>
          <div style={displayNameContainerStyle}>
              <div style={inputnameContainer}>
              <InputName
              type={isVisible}
              />
              </div>
              <div style={outputnameContainer}>
              <OutputName
              />
              </div>
          </div>
        </div>
      )
    }else{
      return(
        <div>
        <div style={buttonConatiner}>
            <Button 
            name={"登壇者名を非表示"}
            func={handleButtonClick}
            style={buttonStyle}
            />
            <Button
            name={"発表順をコピー"}
            func={Copy}
            style={buttonStyle}
            />
        </div>
        <div style={displayNameContainerStyle}>
            <div style={inputnameContainer}>
            </div>
            <div style={outputnameContainer}>
            <OutputName
            />
            </div>
        </div>
      </div>
      )
    }


}

export default DisplayNameContainer
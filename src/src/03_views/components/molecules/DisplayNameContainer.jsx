import React from 'react'
import InputName from '../atoms/InputName';
import OutputName from '../atoms/OutputName';
import Button from '../atoms/Button';
import Copy from '../modules/Copy';
import { useVisible } from '../../../02_hook/useVisible'
import './DisplayNameContainer.css'

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

      // ボタンを押したときのスタイル変更
        const handleMouseDown = (e) => {
          e.target.style.transform = 'scale(0.95)';
      };
  
      // ボタンを離したときのスタイル変更
      const handleMouseUp = (e) => {
          e.target.style.transform = 'scale(1)';
      };

    if (isVisible){
      return (
        <div>
          <div style={buttonConatiner}>
              <Button 
              className={"button button-visible"}
              name={"登壇者名を非表示"}
              func={handleButtonClick}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
              />
              <Button
              name={"発表順をコピー"}
              className={"button button-copy"}
              func={Copy}
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
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
            className={"button button-invisible"}
            name={"登壇者名を表示"}
            func={handleButtonClick}
            handleMouseDown={handleMouseDown}
            handleMouseUp={handleMouseUp}
            />
            <Button
            className={"button button-copy"}
            name={"発表順をコピー"}
            func={Copy}
            handleMouseDown={handleMouseDown}
            handleMouseUp={handleMouseUp}
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
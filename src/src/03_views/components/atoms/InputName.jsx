import React from 'react'
import Button from '../atoms/Button'
import { useState } from 'react'

function InputName () {

  const [isVisible, setIsVisible] = useState(true);

  const containerStyle = {
    width: '150px'
  }

  const inputnameStyle = {
    resize: 'none',
    width: '150px',
    height: '60vh'
  }

  const buttonStyle = {
    margin:'10px',
    padding: '10px 20px', // 余白
    fontSize: '10px', // フォントサイズ
    width: '150x', // 幅
    textAlign: 'center', // 文字揃え
    borderRadius: '5px', // 角丸
    cursor: 'pointer', // マウスカーソルで指を表示
    transition: 'transform 0.2s', // 変形のトランジション
  }

  const handleButtonClick = () => {
    setIsVisible(prevState => !prevState); 
    console.log(isVisible)
  };

  if (isVisible){
    return (
      <div style={containerStyle}>
        <Button 
        name={"登壇者名を非表示"}
        func={handleButtonClick}
        style={buttonStyle}
        />
        <textarea id="inputname" style={inputnameStyle} placeholder='改行区切りで入力'>
  
        </textarea>
      </div>
    )
  }else{
    return(
      <div style={containerStyle}>
        <Button 
        name={"登壇者名を表示"}
        func={handleButtonClick}
        style={buttonStyle}
        />
      </div>

    )

  }

}

export default InputName
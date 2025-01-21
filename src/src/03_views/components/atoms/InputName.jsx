import React from 'react'
import Button from '../atoms/Button'
import isDisp from '../modules/IsDisp'

function InputName () {
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

  let boolean = true;

  if (boolean){
    return (
      <div>
        <Button 
        name={"登壇者名を非表示"}
        func={isDisp}
        style={buttonStyle}
        />
        <textarea id="inputname" style={inputnameStyle} placeholder='改行区切りで入力'>
  
        </textarea>
      </div>
    )
  }else{
    <div>
      <Button 
      name={"登壇者名を非表示"}
      func={isDisp}
      style={buttonStyle}
      />
    </div>

  }

}

export default InputName
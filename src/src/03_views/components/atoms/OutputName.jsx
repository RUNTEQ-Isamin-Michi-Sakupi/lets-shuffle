import React from 'react'
import Button from '../atoms/Button'
import Copy from '../modules/Copy'

function OutputName () {

  const outputnameStyle = {
    width: '150px',
    resize: 'none',
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

  return (
    <div>
        <Button
          name={"発表順をコピー"}
          func={Copy}
          style={buttonStyle}
        />
      <textarea id="outputname" style={outputnameStyle}>

      </textarea>
    </div>
  )
}

export default OutputName
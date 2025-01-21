import React from 'react'
import Button from '../atoms/Button'
import Copy from '../modules/Copy'

const OutputName = () => {
  const outputnameStyle = {
    width: '150px',
    resize: 'none',
    height: '60vh'
  }

  const outputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  const copyButtonStyle = {
    margin:'5x',
    padding: '5px 10px', // 余白
    fontSize: '16px', // フォントサイズ
    width: '70px', // 幅
    textAlign: 'center', // 文字揃え
    borderRadius: '5px', // 角丸
    cursor: 'pointer', // マウスカーソルで指を表示
    transition: 'transform 0.2s', // 変形のトランジション
  }

  return (
    <div>
      <div style={outputContainerStyle}>
        <h3>発表順</h3>
        <Button
          name={"copy"}
          func={Copy}
          style={copyButtonStyle}
        />
       </div>
      <textarea id="outputname" style={outputnameStyle}>

      </textarea>
    </div>
  )
}

export default OutputName
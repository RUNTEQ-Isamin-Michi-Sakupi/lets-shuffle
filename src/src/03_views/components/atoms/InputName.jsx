import React from 'react'

function InputName (isVisible) {

  const containerStyle = {
    width: '10vw'
  }

  const inputnameStyle = {
    resize: 'none',
    width: '8vw',
    height: '55vh'
  }
  
    return (
      <div style={containerStyle}>
        <textarea id="inputname" style={inputnameStyle} placeholder='登壇者名を改行区切りで入力…' >
        </textarea>
      </div>
    )
}

export default InputName
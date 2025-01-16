import React from 'react'

const InputName = () => {
  const inputnameStyle = {
    resize: 'none',
    width: '150px',
    height: '60vh'
  }
  return (
    <div>
    <h3>登壇者名</h3>
      <textarea id="inputname" style={inputnameStyle} placeholder='改行区切りで入力'>

      </textarea>
    </div>
  )
}

export default InputName
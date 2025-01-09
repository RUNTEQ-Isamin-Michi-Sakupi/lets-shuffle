import React from 'react'

const InputName = () => {
  const inputnameStyle = {
    resize: 'none',
    width: '150px',
    height: '74vh'
  }
  return (
    <textarea id="inputname" style={inputnameStyle} placeholder='改行区切りで入力'>

    </textarea>
  )
}

export default InputName
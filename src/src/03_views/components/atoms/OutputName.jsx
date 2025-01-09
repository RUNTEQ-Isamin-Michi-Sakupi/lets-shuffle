import React from 'react'

const OutputName = () => {
  const outputnameStyle = {
    width: '150px',
    resize: 'none',
    height: '74vh'
  }
  return (
    <textarea id="outputname" style={outputnameStyle}>

    </textarea>
  )
}

export default OutputName
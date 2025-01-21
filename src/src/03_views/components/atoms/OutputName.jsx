import React from 'react'

function OutputName () {

  const outputnameStyle = {
    width: '10vw',
    resize: 'none',
    height: '55vh'
  }  

  return (
    <div>
      <textarea id="outputname" style={outputnameStyle}>
      </textarea>
    </div>
  )
}

export default OutputName
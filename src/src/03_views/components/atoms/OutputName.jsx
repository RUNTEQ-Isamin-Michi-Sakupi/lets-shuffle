import React from 'react'
import Button from '../atoms/Button'
import Copy from '../modules/Copy'

const OutputName = () => {
  const outputnameStyle = {
    width: '150px',
    resize: 'none',
    height: '60vh'
  }

  const buttonStyle = {
    display: 'flex'
  }
  return (
    <div>
      <div style={buttonStyle}>
        <h3>発表順</h3>
        <Button
          name={"copy"}
          func={Copy}
        />
       </div>
      <textarea id="outputname" style={outputnameStyle}>

      </textarea>
    </div>
  )
}

export default OutputName
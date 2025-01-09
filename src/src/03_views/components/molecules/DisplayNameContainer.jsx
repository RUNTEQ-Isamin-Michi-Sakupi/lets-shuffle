import React from 'react'
import InputName from '../atoms/InputName';
import OutputName from '../atoms/OutputName';

const DisplayNameContainer = () => {
    const displayNameContainerStyle = {
        marginTop: '20px',
        display: 'flex'
      }
  
      const inputnameContainer = {
        marginLeft: '2.5px',
        marginRight: '5px'
  
      }
      const outputnameContainer = {
        marginLeft: '2.5px',
        marginRight: '30px'
      }

  return (
    <div style={displayNameContainerStyle}>
        <div style={inputnameContainer}>
        <InputName />
        </div>
        <div style={outputnameContainer}>
        <OutputName />
        </div>
    </div>
  )
}

export default DisplayNameContainer
import React from 'react'

function Button (props)  {
  const { name, func } = props;
  return (
      <button type='button' onClick={()=>func()}>{name}</button>
  )
}

export default Button
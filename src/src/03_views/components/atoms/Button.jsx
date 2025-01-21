import React from 'react'

function Button (props)  {
  const { name, func, style} = props;
  return (
      <button style={style} type='button' onClick={()=>func()}>{name}</button>
  )
}

export default Button
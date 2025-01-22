import React from 'react'

function Button (props)  {
  const { className,name, func, handleMouseDown,handleMouseUp} = props;
  return (
      <button
        className={className}
        type='button' 
        onClick={()=>func()}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {name}
      </button>
  )
}

export default Button
import React from 'react'

function NowAnnouncer( props ) {
    const {names,index }= props;
  return (
        <p id='nowAnnouncer'>
            {names[index]}
        </p>
  )
}

export default NowAnnouncer
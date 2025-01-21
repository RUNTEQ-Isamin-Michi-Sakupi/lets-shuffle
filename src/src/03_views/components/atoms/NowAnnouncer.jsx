import React from 'react'

function NowAnnouncer( props ) {
    const {names,index }= props;
    if(names[index]){
      return (
        <p id='nowAnnouncer'>
            {index + 1}:{names[index]}
        </p>
      )
    }else{
      return(
        <p id='nowAnnouncer'>
          No Announcer
        </p>
      )

    }

}

export default NowAnnouncer
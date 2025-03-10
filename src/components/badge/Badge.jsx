import React from 'react'

function Badge({color="badge-default",text='Add me a "text" prop...', border=true}) {

    
       
       

  return (
    <>
        <div className={`badge ${color} ${border?"":"badge-shadow"}`} style={border?{border:`1px solid`}:null} >
            {text}
        </div>
    </>
  )
}

export default Badge

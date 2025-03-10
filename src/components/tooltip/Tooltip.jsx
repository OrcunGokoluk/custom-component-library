import React from 'react'

function Tooltip({ color="tooltip-default-color" border=true}) {
  return (
    <>
      <div className="tooltip pink">
      <div className="tooltip-body">
          Tooltip
      </div>
        <div className='tooltip-tail pink' >
            
        </div>
      </div>
    </>
  )
}

export default Tooltip

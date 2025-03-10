import React from 'react'
import { GrTooltip } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

function Tooltip({ icon=<GrTooltip/>, color="tooltip-default-color",title="Tooltip", text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at!"}) {
  return (
    <>
      <div className={`tooltip ${color}`}>

      <div className="tooltip-body">
        <section className={`tooltip-icon ${color}`}>
            {icon}
        </section>
        <section className="tooltip-content">
            <h3>{title}</h3>
            <p className={`tooltip-${color}`}>{text}</p>
        </section>
        <button className={`tooltip-close ${color}`}>
            <IoClose/>
        </button>
      </div>



        <div className={`tooltip-tail ${color}`} >
            
        </div>
      </div>
    </>
  )
}

export default Tooltip

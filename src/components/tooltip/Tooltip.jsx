import React from 'react'
import { GrTooltip } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import useToggleTooltip from './useToggleTooltip';
import "./tooltip.css"

function Tooltip({ icon=<GrTooltip/>, color="tooltip-default-color",title="Tooltip", text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at!", visible=true}) {

 const [isOpen, toggle] = useToggleTooltip(visible)

  return (
    <>
      {
        isOpen ? 
        <div className={`tooltip ${color}`}>

      <div className="tooltip-body">
        <section className={`tooltip-icon ${color}`}>
            {icon}
        </section>
        <section className="tooltip-content">
            <h3>{title}</h3>
            <p className={`tooltip-${color}`}>{text}</p>
        </section>
        <button onClick={()=>toggle()} className={`tooltip-close ${color}`}>
            <IoClose/>
        </button>
      </div>
        <div className={`tooltip-tail ${color}`} >        
      </div>
      </div>:null
      }
    </>
  )
}

export default Tooltip

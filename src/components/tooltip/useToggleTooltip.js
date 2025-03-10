import React, { useEffect } from "react"


export default function useToggleTooltip(initialValue){
      const [isOpen, setIsOpen] = React.useState(initialValue)

      function toggle(){
        setIsOpen(prev=>!prev)
      }

      useEffect(() => {
        setIsOpen(initialValue);
      }, [initialValue]);


      return [isOpen, setIsOpen, toggle]
}
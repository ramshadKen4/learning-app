import React from 'react'

function Skill({icon,children}) {
  return (
    <div className='skill'>
        <div className='skill-icon'>
        <img src={"/icons/"+icon} alt={icon}/>
        </div>
        <div className='skill-name'>
            {children}
        </div>
    </div>
  )
}

export default Skill
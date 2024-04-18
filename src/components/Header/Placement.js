import React from 'react'
import Stats from './Stats'
import './Placement.css'
import BrochureApply from './BrochureApply'

function Placement() {
  return (
    <div className='placement'>
      <p className='introducation'>People click learning provides the best Full stack training in bangalore with </p>
      <p className='heading'>100% Job Placements</p>
      <div className='stats-container'>
        <Stats count="550+">Students Enrolled</Stats>
        <Stats count="400+">Placements</Stats>
        <Stats count="40%">Avarage salary hike</Stats>
        <Stats count="20LPA">Heighest salary</Stats>
      </div>
      <div className='apply-section'>
          <BrochureApply/>
      </div>
    </div>
  )
}

export default Placement
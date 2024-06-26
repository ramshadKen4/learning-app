import React from 'react'
import Stats from './Stats'
import './Placement.css'
import DemoApply from './DemoApply'

function Placement() {
  return (
    <div className='placement-section'>
      <p className='introduction'>Peopleclick learning provides the best Full stack training with</p>
      <h3 className='placement-heading'>100% Job Placements</h3>
      <div className='stats-container'>
        <Stats count="550+">Students Enrolled</Stats>
        <Stats count="400+">Placements</Stats>
        <Stats count="40%">Avarage salary hike</Stats>
        <Stats count="20LPA">Heighest salary</Stats>
      </div>
      <div className='apply-section'>
          <DemoApply/>
      </div>
    </div>
  )
}

export default Placement
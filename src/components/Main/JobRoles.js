import React from 'react'
import PostCard from '../utility/PostCard'
import './JobRoles.css'

function JobRoles() {
  const heading = <div className='extraspace'>Full-Stack Developer Job Roles :</div>;
  return (
    <div className='jobroles fullwider'>
      <PostCard
        heading={heading}
        image="job-role.png"
      >
        <p className='jobrole-para'>
          A professional with proficiency in front-end and back-end programming utilizing technologies is known as full-stack developer.
          The particular job roles may differ based on the needs of the project and the organization,
          some of the certain job roles are
        </p>
        <ul className='jobrole-list'>
          <li><img src="/icons/arrow.png" className="check-tick" alt="Check Mark Icon" />Front end developer</li>
          <li><img src="/icons/arrow.png" className="check-tick" alt="Check Mark Icon" />Web developer</li>
          <li><img src="/icons/arrow.png" className="check-tick" alt="Check Mark Icon" />Back end developer</li>
          <li><img src="/icons/arrow.png" className="check-tick" alt="Check Mark Icon" />Full-stack developer</li>
          <li><img src="/icons/arrow.png" className="check-tick" alt="Check Mark Icon" />Python developer</li>
          <li><img src="/icons/arrow.png" className="check-tick" alt="Check Mark Icon" />Software engineer</li>
        </ul>
      </PostCard>
    </div>
  )
}

export default JobRoles
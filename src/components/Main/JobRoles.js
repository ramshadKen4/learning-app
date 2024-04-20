import React from 'react'
import PostCard from '../utility/PostCard'

function JobRoles() {
  return (
    <div className='learning'>
      <PostCard
        heading="Full-stack developer Job roles"
        image="job-role.png"
      >
        <p className='blog-para'>
          A professional with proficiency in front-end and back-end programming utilizing technologies is known as full-stack developer.
          The particular job roles may differ based on the needs of the project and the organization,
          some of the certain job roles are
        </p>
        <ul className='blog-para'>
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
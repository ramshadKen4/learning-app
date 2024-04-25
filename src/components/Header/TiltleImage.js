import React from 'react'
import './TitleImage.css'

function TiltleImage() {
  return (
    <div className="title-image">
      <div className="title">
        <h4>Learn</h4>
        <h1>Full stack</h1>
        <h1>Development</h1>
        <h5>Training Program</h5>
      </div>
      <div className="image">
        <img src='/images/title-image.png' alt="Title Image" />
      </div>
    </div>
  )
}

export default TiltleImage
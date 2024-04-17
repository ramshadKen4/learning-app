import React from 'react'
import './TitleImage.css'

function TiltleImage() {
  return (
    <div className="title-image">
      <div className="title">
        <img src='/images/title.png' alt="Title" />
      </div>
      <div className="image">
        <img src='/images/title-image.png' alt="Title Image" />
      </div>
    </div>
  )
}

export default TiltleImage
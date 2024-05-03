import React ,{Component}from 'react'
import './ProfileCard.css'

function ProfileCard({profilePic, name, company, bg, children}) {
  return (
    <div className="profile-card" style={{backgroundColor:bg}}>
      <div className="profile-pic-container">
        <div className="profile-pic">
          <img src={"/icons/" + profilePic} alt="Profile Pic" />
        </div>
      </div>
      <div className="client-info">
        <h3 className="client-name">{name}</h3>
        <p className="client-role">{company}</p>
      </div>
      <div className="profile-text">
        {children}
      </div>
    </div>
  )
}

export default ProfileCard


import React from 'react'
import './ProfileCard.css'

function ProfileCard({profilePic, name, company, bg, children}) {
  return (
    <div class="profile-card" style={{backgroundColor:bg}}>
      <div class="profile-pic-container">
        <div class="profile-pic">
          <img src={"/icons/" + profilePic} alt="Profile Pic" />
        </div>
      </div>
      <div class="client-info">
        <h3 class="client-name">{name}</h3>
        <p class="client-role">{company}</p>
      </div>
      <div class="profile-text">
        {children}
      </div>
    </div>
  )
}

export default ProfileCard


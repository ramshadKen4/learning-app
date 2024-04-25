import React from 'react'
import PostCard from '../utility/PostCard'
import './Learning.css'
import ConnectButton from '../utility/ConnetButton'

function Learning() {
    const caption = <p>Our Full stack development program is offered on both <i><b>Online </b></i>and <i><b>Offline </b></i>classes</p>
    return (
        <div className='learning'>
            <PostCard
                heading="Learning Journey"
                image="learning.png"
                caption={caption}
            >
                <ul className='para blog-para'>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Weekly live instruction classes</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Hands-on live projects</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Industry-relevant live bootcamps</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Industry-Recognized certificates</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Participating in practice interviews & CV preparation</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Getting ready for placements</li>
                </ul>
                <div className='conncect-button-xl'>
                    <ConnectButton>Connect With us</ConnectButton>
                </div>
            </PostCard>
        </div>
    )
}

export default Learning
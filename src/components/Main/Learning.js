import React from 'react'
import PostCard from '../utility/PostCard'
import './Learning.css'

function Learning() {
    return (
        <div className='learning'>
            <div>Content above the learning journey</div>
            <PostCard
                heading="Learning journey"
                image="title-image.png"
                caption="Our Full stack development program is offered on both online and offline classes"
            >
                <ul className='blog-para'>
                    <li><img src="/icons/check-mark.png" alt="Check Mark Icon" />Weekly live instruction classes</li>
                    <li><img src="/icons/check-mark.png" alt="Check Mark Icon" />Hands-on live projects</li>
                    <li><img src="/icons/check-mark.png" alt="Check Mark Icon" />Industry-relevant live bootcamps</li>
                    <li><img src="/icons/check-mark.png" alt="Check Mark Icon" />Industry-Recognized certificates</li>
                    <li><img src="/icons/check-mark.png" alt="Check Mark Icon" />Participating in practice interviews & CV preparation</li>
                    <li><img src="/icons/check-mark.png" alt="Check Mark Icon" />Getting ready for placements</li>
                </ul>
            </PostCard>
        </div>
    )
}

export default Learning
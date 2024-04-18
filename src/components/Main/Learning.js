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
                <ul>
                    <li>Weekly live instruction classes</li>
                    <li>Hands-on live projects</li>
                    <li>Industry-relevant live bootcamps</li>
                    <li>Industry-Recognized certificates</li>
                    <li>Participating in practice interviews & CV preparation</li>
                    <li>Getting ready for placements</li>
                </ul>
            </PostCard>
        </div>
    )
}

export default Learning
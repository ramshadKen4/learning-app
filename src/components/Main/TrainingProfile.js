import React from 'react'
import PostCard from '../utility/PostCard'

function TrainingProfile() {
    const heading = <><span className='aktiv-thin'>Our </span>Full-Stack Developer Trainer Profile</>
    return (
        <div className='learning'>
            <PostCard
                heading={heading}
            >
                <p className='para no-padding'>
                    Our Experienced specialists with a focus on many facets of Full Stack Development, such as front-end, back end, Angular, React, and other areas, teach at People click learning
                    These instructors provide hands-on instruction to students in both client-side and server-side programming.<br/>
                    The trainers evaluate each student on a regular basis to monitor their progress.
                    By conducting practice interviews and providing insightful commentary on interview questions, the trainers are essential in helping students get ready for the workforce.
                </p>
            </PostCard>
        </div>
    )
}

export default TrainingProfile
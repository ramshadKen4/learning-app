import React from 'react'
import PostCard from '../utility/PostCard'

function CareerSupport() {
    const heading = <div className='extraspace'><span className='aktiv-thin'>Grow with</span>People Click Learning</div>
    return (
        <div className='career-support fullwider'>

            <PostCard
                heading={heading}
                image="career-support.png"
            >
                <p className='para'>
                    At People click , we want to give you a thorough educational experience.
                    Because of our special career support services,
                    we are here to support you even after you start working and have a new perspective.
                    Gain access to over 500 placement partners and explore an abundance of opportunities.
                </p>
            </PostCard>
        </div>
    )
}

export default CareerSupport
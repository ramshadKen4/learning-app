import React from 'react'
import PostCard from '../utility/PostCard'
import ConnectButton from '../utility/ConnetButton'

function CareerSupport() {
    const heading = <div className='extraspace'><span className='aktiv-thin'>Grow with</span>Peopleclick Learning</div>
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
                <div className='conncect-button-xl'>
                    <ConnectButton>Connect With us</ConnectButton>
                </div>
            </PostCard>
        </div>
    )
}

export default CareerSupport
import React from 'react'
import PostCard from '../utility/PostCard'
import './ProgramInfo.css'

function ProgramInfo() {

    function Eligibility() {
        return (

            <div className='programinfo'>
                <PostCard
                    heading="Eligibility"
                >
                    <ul className='program-para none-style-ul'>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Computer science Graduates  </li>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />working professionals</li>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />IT background students degree with BCA , BSC , BE  etc</li>
                    </ul>
                </PostCard>
            </div>
        )

    }
    function ProgramHighlights() {
        return (
            <div className='program'>

                <PostCard
                    heading="Program Highlights"
                >
                    <ol className='program-para'>
                        <li>Designed for working professionals and graduates</li>
                        <li>Practical hands on training</li>
                        <li>One to one and group classes with Experienced mentors</li>
                        <li>Soft skill & Placement training</li>
                        <li>Free English Communication Training</li>
                        <li>Affordable fees</li>
                        <li>Placement Support</li>
                    </ol>
                </PostCard>
            </div>
        )
    }

    return (
        <>
            <Eligibility />
            <ProgramHighlights />
        </>

    )
}

export default ProgramInfo
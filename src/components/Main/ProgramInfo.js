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
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Weekly live instruction classes</li>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Hands-on live projects</li>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Industry-relevant live bootcamps</li>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Industry-Recognized certificates</li>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Participating in practice interviews & CV preparation</li>
                        <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />Getting ready for placements</li>
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
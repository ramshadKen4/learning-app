import React from 'react'
import './Launchpad.css'
import Product from '../utility/Product'
import PostCard from '../utility/PostCard'

function Launchpad() {
    return (
        <div class="container">
            <div class="item">
                <PostCard
                    heading="Career Counseling"
                >
                    <p className='blog-para'>
                        Our devoted program mentors are seasoned professionals who will assist you with the readings,
                        ensure that you are informed about what is happening in class, and motivate you to succeed academically.
                    </p>
                </PostCard>
            </div>
            <div class="item">
                <PostCard
                    heading="Complete placement assistance"
                >
                    <p className='blog-para'>
                        With our career services,
                        we'll make sure you land your ideal position and introduce you to rewarding opportunities in digital marketing.
                    </p>
                </PostCard>
            </div>
            <div class="item">
                <PostCard
                    heading="Getting Ready for the Interview"
                >
                    <p className='blog-para'>
                        We have created a training course that, via an analysis of the most often asked interview questions, will confidently prepare you for employment interviews.
                    </p>
                </PostCard>
            </div>
        </div>

    )
}

export default Launchpad
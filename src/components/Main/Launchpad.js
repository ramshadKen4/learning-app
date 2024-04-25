import React from 'react'
import './Launchpad.css'
import Product from '../utility/Product'
import PostCard from '../utility/PostCard'

function Launchpad() {
    return (
        <div class="launchpad-container">
            <div class="item">
                <h2 className='launchpad-heading'>Career Counseling</h2>
                <p className='launchpad-para'>
                    Our devoted program mentors are seasoned professionals who will assist you with the readings,
                    ensure that you are informed about what is happening in class, and motivate you to succeed academically.
                </p>
            </div>
            <div class="item">
                <h2 className='launchpad-heading'>Complete Placement Assistance</h2>
                <p className='launchpad-para'>
                    With our career services,
                    we'll make sure you land your ideal position and introduce you to rewarding opportunities in digital marketing.
                </p>
            </div>
            <div class="item">
                <h2 className='launchpad-heading'>Getting Ready For The Interview</h2>
                <p className='launchpad-para'>
                We have created a training course that, via an analysis of the most often asked interview questions, will confidently prepare you for employment interviews.
                </p>
            </div>
        </div>

    )
}

export default Launchpad
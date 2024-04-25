import React from 'react'
import './BlogContent.css'
import PostCard from '../utility/PostCard'

function BlogContent() {
    return (
        <div className='program'>
            <PostCard
                heading="Why Choose us ?"
            >
                <p className="para no-padding">
                    People click Learning’s Python Full Stack development Course provides the complete practical live project training in Python Development. From Basics to Advanced Level, our Python Full Stack Development Training is provided by our industry experts.<br /> Based on the requirements of the students to achieve their goals, we have built our sophisticated Full Stack with Python Django Training Course curriculum. We provide both in-person Python Full Stack development course instruction and online Python Full Stack instruction with real-time projects.
                </p>
            </PostCard>
        </div>
    )
}

export default BlogContent
import React from 'react'
import './PostCard.css'
function PostCard({ heading, caption, image, children }) {
    return (
        <div className='post-card'>
            <div className='post-header'>
                <h2>{heading}</h2>
                <p>{caption}</p>
            </div>
            <div className='post-content'>
                <img className = "post-content-img"src={'/images/'+image} alt='Post' />
                <div>{children}</div>
            </div>
        </div>
    )
}

export default PostCard
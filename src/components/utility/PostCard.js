import React from 'react'
import './PostCard.css'
function PostCard({ heading, caption, image, children }) {
    return (
        <div className='post-card'>
            <div className='post-header'>
                <h2 className='heading'>{heading}</h2>
                {
                    caption && <p className='post-caption'>{caption}</p>
                }
            </div>
            <div className='post-content'>
                {image && <img className="post-content-img" src={'/images/' + image} alt='Post' />}
                <div>{children}</div>
            </div>
        </div>
    )
}

export default PostCard
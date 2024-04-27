import React from 'react'
import PostCard from '../utility/PostCard'

function FullstackCourse() {
    const heading = <div className='extraspace'><span className='aktiv-thin'>Full Stack Developer </span>Course Objectives</div>
    return (
        <div className='learning'>
            <PostCard
                heading={heading}
                image="fullstack.png"
            >
                <ul className='fullstack-list' style={{ listStyleType: 'none'}}>
                    <li className=''><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />
                        Understanding the foundations of HTML, CSS, and Java-script in web development.</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />
                        Gaining experience with front-end development and using frameworks such as React or Angular.</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />
                        Depending on the student's option, investigating back-end development and developing proficiency in Java, Python, Node JS, PHP, or Dot NET.</li>
                    <li><img src="/icons/check-mark.png" className="check-tick" alt="Check Mark Icon" />
                        Knowing database management, encompassing No SQL (not relational databases) like MongoDB and relational databases like MySQL and MYSQL.</li>
                </ul>
            </PostCard>
        </div>
    )
}

export default FullstackCourse
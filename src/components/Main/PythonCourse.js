import React from 'react'
import PostCard from '../utility/PostCard'
// import './PythonCourse.css'

function PythonCourse() {
    const heading = <><span className='aktiv-thin'>What are all the major things covered in our</span> Python Full-stack Development <span className='aktiv-thin'>course</span></>
    const style = {
        color: '#282727',
        fontSize: '18px',
        lineHeight: '2.8',
        marginLeft: '10px',
        marginBsottom: '20px'
    }
    return (
        <div className='python'>
            <PostCard
                heading={heading}
                image="python-course.png"
            >
                <div className='para'>
                    Core Python, Advanced Python, MySQL, Rest API, React JS, GITHUB, HTML, CSS, Bootstrap, JavaScript, J Query, and real-world applications are all included in our course.
                </div>
            </PostCard>
        </div>
    )
}

export default PythonCourse
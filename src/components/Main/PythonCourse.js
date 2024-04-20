import React from 'react'
import PostCard from '../utility/PostCard'
// import './PythonCourse.css'

function PythonCourse() {
    const style = {
        color: '#282727',
        fontSize: '18px',
        lineHeight: '2.8',
        marginLeft: '10px',
        marginBsottom: '20px'
    }
    return (
        <div className='learning'>
            <PostCard
                heading="things covered in our Python Full-stack development course"
                image="python-course.png"
                caption="Our Full stack development program is offered on both online and offline classes"
            >
                <p style={style}>
                    Core Python, Advanced Python, MySQL, Rest API, React JS, GITHUB, HTML, CSS, Bootstrap, JavaScript, J Query, and real-world applications are all included in our course.
                </p>
            </PostCard>
        </div>
    )
}

export default PythonCourse
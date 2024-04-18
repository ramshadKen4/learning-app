import React from 'react'
import BlogContent from '../components/Main/BlogContent'
import Skills from '../components/Main/Skills'
import Learning from '../components/Main/Learning'
function Main() {
    return (
        <div className='main'>
            <BlogContent/>
            <Skills/>
            <Learning/>
        </div>
    )
}

export default Main
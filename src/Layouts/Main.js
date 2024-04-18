import React from 'react'
import BlogContent from '../components/Main/BlogContent'
import Skills from '../components/Main/Skills'
import Learning from '../components/Main/Learning'
import Tools from '../components/Main/Tools'
function Main() {
    return (
        <div className='main'>
            <BlogContent/>
            <Skills/>
            <Learning/>
            <Tools/>
        </div>
    )
}

export default Main
import React from 'react'
import BlogContent from '../components/Main/BlogContent'
import Skills from '../components/Main/Skills'
import Learning from '../components/Main/Learning'
import Tools from '../components/Main/Tools'
import PythonCourse from '../components/Main/PythonCourse'
import Eligibility from '../components/Main/ProgramInfo'
import ProgramInfo from '../components/Main/ProgramInfo'
import FullstackCourse from '../components/Main/FullstackCourse'
import CareerSupport from '../components/Main/CareerSupport'
import Launchpad from '../components/Main/Launchpad'
import TrainingProfile from '../components/Main/TrainingProfile'
import JobRoles from '../components/Main/JobRoles'
function Main() {
    return (
        <div className='main'>
            <BlogContent />
            <Skills />
            <Learning />
            <Tools />
            <PythonCourse />
            <ProgramInfo />
            <FullstackCourse />
            <CareerSupport />
            <Launchpad />
            <TrainingProfile/>
            <JobRoles/>
        </div>
    )
}

export default Main
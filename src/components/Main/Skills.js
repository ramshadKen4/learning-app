import React from 'react'
import Skill from './Skill'
import './Skills.css'
function Skills() {
  return (
    <div className='skills'>
        <div className='skills-heading'>
            Skills Covered
        </div>
        <div className='skills-items'>
            <Skill icon={"html.png"}>HTML</Skill>
            <Skill icon={"java.png"}>Core Java</Skill>
            <Skill icon={"css.png"}>CSS</Skill>
            <Skill icon={"bootstrap.png"}>Bootstrap</Skill>
            <Skill icon={"mysql.png"}>MySql</Skill>
            <Skill icon={"react.png"}>React Js</Skill>
            <Skill icon={"jsp.png"}>JSP</Skill>
            <Skill icon={"servlet.png"}>Servlets</Skill>
            <Skill icon={"python.png"}>Python</Skill>
            <Skill icon={"jdbc.png"}>JDBC</Skill>

        </div>
    </div>
  )
}

export default Skills
import React from 'react'
import Product from '../utility/Product'
import './Skills.css'
function Skills() {
  return (
    <div className='skills'>
        <div className='extraspace heading'>
            Skills Covered
        </div>
        <div className='skills-items'>
            <Product icon={"html.png"}>HTML</Product>
            <Product icon={"java.png"}>Core Java</Product>
            <Product icon={"css.png"}>CSS</Product>
            <Product icon={"bootstrap.png"}>Bootstrap</Product>
            <Product icon={"mysql.png"}>MySql</Product>
            <Product icon={"react.png"}>React Js</Product>
            <Product icon={"servlet.png"}>Servlets</Product>
            <Product icon={"python.png"}>Python</Product>
            <Product icon={"jsp.png"}>JSP</Product>
            <Product icon={"jdbc.png"}>JDBC</Product>
        </div>
    </div>
  )
}

export default Skills
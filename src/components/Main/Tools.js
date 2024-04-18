import React from 'react'
import Product from '../utility/Product'
import './Tools.css'
function Tools() {
    return (
        <div className='tools'>
            <div className='tools-heading'>
                Tools Covered
            </div>
            <div className='tools-items'>
                <Product icon={"eclips.png"}>Eclipse</Product>
                <Product icon={"mysql.png"}>MySql workbench</Product>
                <Product icon={"api.png"}>Rest API</Product>
                <Product icon={"git.png"}>GIT</Product>
                <Product icon={"spring.png"}>Spring Boot</Product>
                <Product icon={"django.png"}>Django</Product>
                <Product icon={"vscode.png"}>VS Code</Product>
                <Product icon={"spring-suit.png"}>Spring Suite Tool</Product>
            </div>
        </div>
    )
}

export default Tools
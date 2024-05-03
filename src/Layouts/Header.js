import React from 'react'
import TiltleImage from '../components/Header/TiltleImage'
import Placement from '../components/Header/Placement'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <TiltleImage/>
            <Placement/>
        </div>
    )
}

export default Header
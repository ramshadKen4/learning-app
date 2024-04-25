import React from 'react'
import './BrochureApply.css'
import ConnectButton from '../utility/ConnetButton'

function BrochureApply() {
    return (
        <div className='brochure-apply'>
            <button className='brochure-btn'>Download Brochure</button>
            <div className='apply-btn'><ConnectButton >Apply Now</ConnectButton></div>
        </div>
    )
}

export default BrochureApply
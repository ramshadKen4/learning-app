import React, { useState } from 'react'
import './DemoApply.css'
import ConnectButton from '../utility/ConnetButton'
import Modal from '../utility/Modal';
import Form from '../utility/Form';

function DemoApply() {
    return (
        <div className='demo-apply'>
            <div className='demo-btn'><ConnectButton>get free demo</ConnectButton></div>
            <div className='apply-btn'><ConnectButton >Talk to our experts</ConnectButton></div>
        </div>
    )
}

export default DemoApply
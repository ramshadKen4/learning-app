import React, { useState } from 'react'
import './BrochureApply.css'
import ConnectButton from '../utility/ConnetButton'
import Modal from '../utility/Modal';
import Form from '../utility/Form';

function BrochureApply() {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className='brochure-apply'>
            <button className='brochure-btn' onClick={handleOpenModal}>Download Brochure</button>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Form><a href='/brochure.pdf' download={'fullstack-brochure.pdf'}>Download Brochure</a></Form>
            </Modal>
            <div className='apply-btn'><ConnectButton >Apply Now</ConnectButton></div>
        </div>
    )
}

export default BrochureApply
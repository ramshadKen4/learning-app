import React, { useState } from 'react'
import './style.css'
import Modal from '../utility/Modal';
import Form from '../utility/Form';
import ConnectButton from '../utility/ConnetButton';

function DownloadBrochure() {

    const [showModal, setShowModal] = useState(false)
    const handleDownload = async () => {
        try {
            const response = await fetch('/brochure.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'fullstack-brochure.pdf'; // Set the desired file name
            link.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };
    const submitHandler = () => {
        handleDownload();
        handleCloseModal();
    }

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (<>
        <Modal isOpen={showModal} onClose={handleCloseModal}>
            <Form submitHandler={submitHandler}>
                DownloadBrochure
            </Form >
        </Modal>
        <div className='booking-btn'>
            <button onClick={handleOpenModal} >Download Brochure </button>
        </div>
    </>
    )
}

export default DownloadBrochure
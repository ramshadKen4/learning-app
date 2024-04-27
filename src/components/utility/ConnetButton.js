// ConnectButton.js
import React, { useState } from 'react';
import './ConnectButton.css';
import Modal from './Modal';
import Form from './Form';
function ConnectButton({ children }) {

  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='connect-btn'>
        <button onClick={handleOpenModal}>{children}</button>
      </div>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <Form></Form>
      </Modal>
    </>
  );
}

export default ConnectButton;

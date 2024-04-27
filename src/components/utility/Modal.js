import React, { useEffect } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && !event.target.closest('.modal')) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return isOpen ? (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    {children && children}
                </div>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    ) : null;
}

export default Modal
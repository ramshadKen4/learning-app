import React, { useEffect } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose }) {
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
                    <h2 className='modal-caption'>Enter Your Details</h2>
                    <form>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="name@example.com" />
                        <input type="tel" placeholder="Phone" />
                        <textarea placeholder="message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    ) : null;
}

export default Modal
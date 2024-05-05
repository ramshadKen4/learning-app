import React from 'react';
import './Address.css';

const Address = () => {
    return (
        <div className="address-container">
            <div className="address-section">
                <p className="address-text">
                    Bangalore<br />
                    Bhumi Complex<br />
                    Sector 7, HSR Layout
                    Bengaluru Karnataka<br />
                    560102
                </p>
                <div className='phone_section'>
                    <img src='/icons/call.svg'></img>
                    <div className="phone-numbers">
                        <span>+91 7338 497 706</span>
                        <span>+91 9741 838 817</span>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="address-section">
                <p className="address-text">
                    Coimbatore<br />
                    41A, 2nd floor
                    WestLokamanya<br />
                    Street, RS Puram
                    Coimbatore<br />
                    641002
                </p>
                <div className='phone_section'>
                    <img src='/icons/call.svg'></img>
                    <div className="phone-numbers">
                        <span>+91 9164 161 200</span>
                        <span>+91 8867 636 114</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
import React, { useState } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';

function Form({ submitHandler, children }) {
    const [formData, setFormData] = useState({})
    emailjs.init('anupamapeopleclick@gmail.com');

    const changeHanler = (e) => {
        const { name } = e.target
        setFormData(
            { ...formData, [name]: e.target.value }
        )
    }
    const sendEmail = (e) => {
        console.log(formData)
        e.preventDefault();
        emailjs.send('service_zwauefk', 'template_qbzkuo3', formData, 't_n2PNvBtv9V11Xvv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error);
            });
        submitHandler && submitHandler();
    }
    return (
        <div className='form'>
            <h2 className='caption'>Enter Your Details</h2>
            <form onSubmit={sendEmail}>
                <input type="text" onChange={changeHanler} placeholder="First Name" name="name" required />
                <input type="email" onChange={changeHanler} placeholder="name@example.com" name='email' required />
                <input type="tel" onChange={changeHanler} placeholder="Phone" name='phone' required />
                <textarea placeholder="message" onChange={changeHanler} name='message'></textarea>
                <button type="submit">{children ? children : 'submit'}</button>
            </form>
        </div>
    )
}

export default Form
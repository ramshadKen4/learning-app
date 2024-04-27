import React from 'react'
import './Form.css'

function Form({children}) {
    return (
        <div className='form'>
            <h2 className='caption'>Enter Your Details</h2>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="name@example.com" />
                <input type="tel" placeholder="Phone" />
                <textarea placeholder="message"></textarea>
                <button type="submit">{children ? children:'submit'}</button>
            </form>
        </div>
    )
}

export default Form
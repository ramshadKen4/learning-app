import React from 'react'

function Stats({ count, children }) {
    return (
        <div className='stats'>
            <div className='stats-item'>
                <div className='number'>
                    {count}
                </div>
                <div className='caption'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Stats
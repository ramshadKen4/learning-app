import React from 'react'
import HiringPartner from '../components/Footer/HiringPartner'
import Testimonials from '../components/Footer/Testimonials'
import Placements from '../components/Footer/Placements'
import Address from '../components/Footer/Address'
import ConnectButton from '../components/utility/ConnetButton'
import DownloadBrochure from '../components/Footer/DownloadBrochure'

function Footer() {
    return (
        <div className='footer'>
            <HiringPartner />
            <Testimonials />
            <Placements />
            <DownloadBrochure/>
        </div>
    )
}

export default Footer
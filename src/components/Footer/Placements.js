import React from 'react'
import ProfileCard from '../utility/ProfileCard';
import ConnectButton from '../utility/ConnetButton';

function Placements() {
    const placements = [
        {
            name: "Sunil",
            company: "IBM",
            role: "Asso. Software Engineer",
            image: "/profiles/sunil.png",
            bg: "#D3D9D1"
        },
        {
            name: "Mohan",
            company: "Gyansys Infotech",
            role: "Fullstack Developer",
            image: "/profiles/mohan.png",
            bg: "#9FA9BE"
        },
        {
            name: "Ramana",
            company: "Wipro",
            role: "Software Engineer",
            image: "/profiles/ramana.svg",
            bg: "#C89FA5"
        },
        {
            name: "Adhil",
            company: "HCL",
            role: "Software Engineer",
            image: "/profiles/adhil.png",
            bg: "#B9D08B"
        }
    ];
    return (
        <>
            <h2 className='extraspace center heading'><span className='aktiv-thin'><i>Our recent</i></span><br />placements</h2>
            <div className='placement'>
                {placements.map((placement, index) => (
                    <ProfileCard
                        key={index}
                        name={placement.name}
                        profilePic={placement.image}
                        bg={placement.bg}
                    >
                        <div>
                            <p className='placement-company'>{placement.company}</p>
                            <p className='placement-role'>{placement.role}</p>
                        </div>
                    </ProfileCard>

                ))}
            </div>
            <div className='booking-btn'>
                <ConnectButton>Book free consultation</ConnectButton>
            </div>
        </>
    )
}

export default Placements
import React from 'react'
import './video.css';
import emailVdo from './videos/email.mp4';
function videoEmail() {
    return (
        <div className="vdo">
            <video autoPlay loop muted>
                <source src={emailVdo}/>
            </video>
        </div>
    )
}

export default videoEmail;

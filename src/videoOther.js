import React from 'react';
import './video.css';
import otherVdo from './videos/else.mp4';
const videoOther=()=> {
    return (
        <div className="vdo">
            <video autoPlay loop>
                <source src={otherVdo}/>
            </video>
        </div>
    )
}

export default videoOther;

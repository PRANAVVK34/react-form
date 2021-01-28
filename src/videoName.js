import React from 'react';
import './video.css';
import nameVdo from './videos/name.mp4';
const videoName=()=> {
    return (
        <div className="vdo">
            <video autoPlay loop muted>
                <source src={nameVdo}/>
            </video>
        </div>
    )
}

export default videoName;

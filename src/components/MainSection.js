import React from 'react'
import './MainSection.css'

function MainSection() {
    return (
        <div className='main-container' id='main'>
            <video src='main.mp4' autoPlay loop muted />
            <h1>Experience your way</h1>
            <p>Your World, Your Choice, Our Passion!</p>
        </div>
    );      
}

export default MainSection;
import React from 'react'
import '../App.js'
import { Button } from './Button'
import './MainSection copy.css'

function MainSection() {
    return (
        <div className='main-container' id='main'>
            <video src='main.mp4' autoPlay loop muted />
            <h1>Experience your way</h1>
            <p>Your World, Your Choice, Our Passion!</p>
            <div className='main-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Start!
                </Button>
            </div>
        </div>
    );      
}

export default MainSection;
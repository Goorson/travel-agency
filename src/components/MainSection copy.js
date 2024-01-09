import React from 'react'
import '../App.js'
import { Button } from './Button'
import './MainSection copy.css'

function MainSection() {
    return (
        <div className='main-container'>
            <video src='video-1.mp4' autoPlay loop muted />
            <h1>Adventure awaits</h1>
            <p>What are you waiting for?</p>
            <div className='main-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Start!
                </Button>
            </div>
        </div>
    );      
}

export default MainSection;
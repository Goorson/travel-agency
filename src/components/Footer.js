import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Out newsletter with fresh offers
            </p>
            <p className='footer-subscription-text'>
                Care to join?
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' className='footer-input' placeholder='Input Your Email'/>
                    <Button buttonStyle='btn--outline'>Send Query</Button>
                </form>
            </div>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5009.813486341128!2d17.030593671315412!3d51.11018075921902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e40c57467f87b%3A0xe72be8d8d320d5d8!2sWroc%C5%82awski%20Rynek!5e0!3m2!1spl!2spl!4v1705303474493!5m2!1spl!2spl" 
        width="250" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='https://www.instagram.com/soultrip.official/?hl=pl'>Instagram</Link>
            <Link to='https://www.facebook.com/p/Soultrip-100077737352690/?paipv=0&eav=Afajd8jge0GD9aajPHRlK7fYDCcqE3qiXXq8kJZxoVUVlF_ez4AMw_OU7gaFxlTH8ak&_rdr'>Facebook</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5009.813486341128!2d17.030593671315412!3d51.11018075921902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e40c57467f87b%3A0xe72be8d8d320d5d8!2sWroc%C5%82awski%20Rynek!5e0!3m2!1spl!2spl!4v1705303474493!5m2!1spl!2spl" 
        width="250" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
      </div>
    </div>
  )
}

export default Footer
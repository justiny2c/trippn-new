import React from 'react'
import {NavLink} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='copyright'>
          <p>@2024 Trippin AI - All rights reserved</p>
        </div>
        {/* <div className="social-media-links">
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div> */}
        <div className="contact-info">
          <NavLink to="/privacy-terms" >Privacy & Terms</NavLink>
          <a href="mailto:contact@trippn.ai?subject=Contact%20Trippn&body=I%20would%20like%20to%20contact%20Trippn%20AI">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
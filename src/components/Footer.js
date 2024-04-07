import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="social-media-links">
        {/* Links to social media platforms */}
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a>
        {/* Add other social media links here */}
      </div>
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        {/* Add any other contact information here */}
      </div>
    </div>
  </footer>
  )
}

export default Footer
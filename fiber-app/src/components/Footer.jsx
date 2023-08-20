import React from 'react'
import '../App.css'

const Footer = () => {
    return (
      <div className='footer-container'>
        <ul className="footer-block block-1">
            <li className="footer-heading">Fiber</li>
            <li>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</li>
            <li>Made with &#9829; in the Netherlands.</li>
        </ul>
        <ul className="footer-block">
            <li className="footer-heading">Sitemap</li>
            <li>Homepage</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Features</li>
        </ul>
        <ul className="footer-block">
            <li className="footer-heading">Resources</li>
            <li>Support</li>
            <li>Contact</li>
            <li>FAQ</li>
        </ul>
        <ul className="footer-block">
            <li className="footer-heading">Company</li>
            <li>About</li>
            <li>Customers</li>
            <li>Blog</li>
        </ul>
        <ul className="footer-block">
            <li className="footer-heading">Portfolios</li>
            <li>Sarah Andrews</li>
            <li>Matthew Higgins</li>
            <li>Janice Dave</li>
        </ul>
      </div>
    )
  }


export default Footer;
import React from "react";
import '../App.css'
import  img from '../assets/hero-Illustration.png'
import { Link } from "react-router-dom"

const Portfolio = () => {
return (
    <div className="portfolio-container">
       <div className="portfolio-text">
            <div className="portfolio-rating">
                <ul>
                <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg>
    </li>
    <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg></li>

    <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg></li>

    <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg></li>

    <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg></li>

                
                </ul>
                <p>Rated 4.8/5 (243 reviews)</p>
            </div>
            <h1>Create your portfolio in minutes.</h1>
            <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
            <div className="portfolio-buttons">
                 <Link to="signin"><button className="btn up">Start Free Trial</button></Link>
                <button className="btn-2">View Examples</button>
            </div>
            <div className="portfolio-icons">
                <p className="portfolio-icons-p-1"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E"/></svg></span>No Credit Card Required</p>
                 <p className="portfolio-icons-p-2"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E"/></svg></span>10 Free Templates</p>
            </div>
           
       </div>
       <div className="portfolio-image">
        <img className="portfolio-img" src={img} alt="hero-illustration"/>
       </div>
    </div>
    )
}

export default Portfolio;
import React from 'react'
import img from "../assets/User Avatar.svg"
// import Glide from '@glidejs/glide'

// new Glide('.glide').mount()


const Testimonial = () => {
return(
    <div className='testimonial-container'>
        <div className="hero">
            <div className="hero-image">
                <img src={img} alt="display picture" />
            </div>
            <div className="hero-text">
                <h2>Sarah Andrews</h2>
                <h3>$100k in revenue</h3>
            </div>

        </div>
        <p className='testimonial-p'>Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.</p>
        <button className='btn test-btn'>View Sarah's Portfolio</button>
    </div>
);
}

export default Testimonial;
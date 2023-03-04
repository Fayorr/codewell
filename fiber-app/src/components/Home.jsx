import React from 'react'
import Navbar from './Navbar';
import Diversify from './Diversify';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import Footer from './Footer';
import "../App.css"

const Home = () => {
    return(
    <div>
        <Navbar />
        <Portfolio />
        <Diversify />
        <Testimonial />
        <Footer />
    </div>
    )
}

export default Home;
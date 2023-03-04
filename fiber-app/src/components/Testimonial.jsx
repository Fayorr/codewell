import React from 'react'
import Slider from "react-slick";
import data from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"

const Card = ({fullname, image, subHeading, paragraph, button}) => {
    
return(
    <div className='testimonial-container'>
        <div className="hero">
            <div className="hero-image">
                <img src={image} alt="" />
            </div>
            <div className="hero-text">
                <h2>{fullname}</h2>
                <h3>{subHeading}</h3>
            </div>
        </div>
        <p className='testimonial-p'>{paragraph}</p>
        <button className='btn test-btn'>{button}</button>
    </div>
);
}

const Testimonial = () => {
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
        <>
        <Slider {...settings}>
        {data.map(function(data){
            return   <Card {...data} key={data.id}/>
        })}
        </Slider>
        </>
    )
}

export default Testimonial;
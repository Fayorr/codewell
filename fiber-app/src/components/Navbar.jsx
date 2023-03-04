import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';





const Navbar = () => {

// const [nav, setNav] = useState(false);

const [toggle, setToggle] = useState(false);

function handleClick() {
    setToggle(!toggle);
}
      
return (
    <div className="nav">
        <div>Fiber</div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
            <li>Community</li>
            <li>Pricing</li>
            <li>Features</li>            
        </ul>
        <div className="bars" onClick={handleClick}>
            <i className={toggle ? "fa-sharp fa-solid fa-xmark" : "fa-solid fa-bars"} aria-hidden="true"></i>
        </div>
        <div className={toggle ? "btn-container" : "btn-container active"}>
           
            <Link to="signin"><button className="btn in">Sign In</button></Link>
           <Link to="signup"> <button className="btn up">Sign Up</button></Link>
        </div>
    </div>
    )
}

export default Navbar;
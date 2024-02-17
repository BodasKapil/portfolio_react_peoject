import React from "react";
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar= () => {
    return(
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link  activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Certifications</Link>
                <Link  activeClass="active" to="works" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Academics</Link>
                
              
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth',offset:-80});
            }}>
                <img src="" alt="" className="desktopMenuImg" />Contact Me</button>
        
        </nav>
    )
}
export default Navbar
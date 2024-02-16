import React from "react";
import './intro.css';
import myself from '../intro/myself.jpeg'

const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kapil Bodas</span><br/>Undergrad Student of VESIT Chembur</span>
                <span className="introText">pursuing B.E in AI & Data Science</span>
                <br/>
                <p className="introPara">Enthusiasts in Cloud Computing and Java.</p>
                <p className="introPara">A Melomaniac Person. Intrested in learning Indian Classical Music.</p>
            </div>
            {/* <img src={myself} className="bg"/> */}
        </section>
    )
}
export default Intro;

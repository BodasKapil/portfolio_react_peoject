import React from "react";
import './intro.css';


const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kapil Bodas</span><br/>Undergrad Student of VESIT Chembur</span>
                <span className="introText">pursuing BE in AI & Data Science</span>
                <br/>
                <p className="introPara">Enthusiasts in Cloud Computing and Java and python</p>
                <p className="introPara">Swim and play kabaddi</p>
                <p className="introPara">A Melomaniac Person. Intrested in learning Indian Classical Music.</p>
            </div>

        </section>
    )
}
export default Intro;

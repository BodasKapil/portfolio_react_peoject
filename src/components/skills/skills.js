import React from "react";
import './skills.css';
import cert1 from '../skills/az-900.png'
import cert2 from '../skills/ai-900.png'
import cert3 from '../skills/dp-900.png'

const Skills = () =>{
    return(
        <section id='skills'>
                <span className="skillTitle">Certifications</span>
                <span className="skillDesc">I have done 3 Microoft Azure Certified Certifications</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={cert1} alt='Microsoft Certified Azure Fundamentals'className="skillBarImg"/>
                        <div className="skillBatText">
                            <h2>Microsoft Certified Azure Fundamentals</h2>
                            <p><a href="https://www.credly.com/badges/b2a7b808-a190-42eb-ba54-19d2fca1511d/public_url">Credly Certification Link</a></p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img  src={cert2} alt='Microsoft Certified Azure AI Fundamentals' className="skillBarImg"/>
                        <div className="skillBatText">
                            <h2>Microsoft Certified Azure AI Fundamentals</h2>
                            <p><a href="https://www.credly.com/badges/c00a178c-8e7d-48c7-aa12-97a54f483d70/public_url">Credly Certification Link</a></p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={cert3} alt='Microsoft Certified Azure Data Fundamentals'  className="skillBarImg"/>
                        <div className="skillBatText">
                            <h2>Microsoft Certified Azure Data Fundamentals</h2>
                            <p><a href="https://www.credly.com/badges/c17d4932-bae0-473a-a23c-b34b0e7237f4/public_url">Credly Certification Link</a></p>
                        </div>
                    </div>
                </div>
        </section>
    )
}
    
export default Skills;
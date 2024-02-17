import React, { useRef } from "react";
import './contact.css'
import img_fb from '../contact/facebook.jpg';
import img_insta from '../contact/instagram.png';
import img_linked from '../contact/linkedIn_PNG8.png';
import img_github from '../contact/GitHub_logo.png';
import emailjs from '@emailjs/browser';

const Contact= () => {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tikbvgj', 'template_k8jewrx', form.current, 'ltpx3C4Rnmb-0QBOZ')
          .then((result) => {
              console.log(result.text);
              alert("Thanks! Kindly check your email!!");
          }, (error) => {
            alert("Something went wrong!! Please try again.");
              console.log(error.text);
          });
      };
    
    return(

        <section id="contactPage">
        <div id="contact">
            <h1 id="cp" className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunity</span>
            <form className="contactForm" ref={form}  onSubmit={sendEmail}> 
                <input type="text" className="name" name="your_name" placeholder="Your Name"/>
                <input type="text" className="email" name = "to_email" placeholder="Your Email Address"/>
                <textarea className="msg" name="message"cols="" rows="5" placeholder="Your Message"></textarea>
                <button typr="submit" value='Send' className="submitBtn">Submit</button>
                <div className="links" >
                    <img src={img_fb} alt="Not found" className="link"/>
                    <img src={img_insta} alt="Not found" className="link"/>
                    <img src={img_github} alt="Not found" className="link"/>
                    <img src={img_linked} alt="Not found" className="link"/>
                </div>
            </form>
        </div>
        </section>
    )
}

export default Contact

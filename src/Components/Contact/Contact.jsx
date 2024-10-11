import React from 'react'
import './Contact.css'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "93f4f555-a93d-40c1-b8e1-955ca4233ad4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
           alert("Message sent successfully");
        }
      };

  return (
    <div id="contact" className ="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, si feel free to contact me and let's make something great together!</p>
                <div className="contact-details">
                    <div className="contact-deet">
                        <img src={mail_icon} alt=""/>
                        <p>smriti101623gmail.com</p>
                    </div>
                    <div className="contact-deet">
                        <img src={call_icon} alt=""/>
                        <p>+91 9999468643</p>
                    </div>
                    <div className="contact-deet">
                        <img src={location_icon} alt=""/>
                        <p>Ghaziabad, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email"/>
                <label htmlFor="">Your Message</label>
                <textarea placeholder="Enter your message" rows="8" name="message"></textarea>
                <button type="submit" className="contact-submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact

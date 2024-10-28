import React from 'react';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';

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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully");
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-12 my-16 mx-6 sm:mx-10 md:mx-20 lg:mx-40">
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center px-4">Get in touch</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F88A9]">Let's talk</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-white leading-7 md:leading-8">
            I'm currently available to take on new projects, so feel free to contact me and let's make something great together!
          </p>
          <div className="flex flex-col gap-5 text-white text-lg sm:text-xl md:text-2xl">
            <div className="flex gap-4 items-center">
              <img src={mail_icon} alt="Email" />
              <p>smriti101623@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={call_icon} alt="Call" />
              <p>+91 9999468643</p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={location_icon} alt="Location" />
              <p>Ghaziabad, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full lg:w-[700px]">
          <label className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0F88A9]">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="w-full h-[50px] sm:h-[55px] md:h-[60px] rounded-lg border-none px-5 text-base sm:text-lg md:text-xl bg-[#1C1C1C] text-white"
          />
          <label className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0F88A9]">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="w-full h-[50px] sm:h-[55px] md:h-[60px] rounded-lg border-none px-5 text-base sm:text-lg md:text-xl bg-[#1C1C1C] text-white"
          />
          <label className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0F88A9]">Your Message</label>
          <textarea
            placeholder="Enter your message"
            rows="6"
            name="message"
            className="w-full rounded-lg border-none px-5 text-base sm:text-lg md:text-xl bg-[#1C1C1C] text-white"
          ></textarea>
          <button
            type="submit"
            className="w-[150px] sm:w-[180px] md:w-[200px] h-[50px] sm:h-[55px] md:h-[60px] rounded-full bg-[#0F88A9] text-white text-base sm:text-lg md:text-xl font-medium hover:scale-110 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

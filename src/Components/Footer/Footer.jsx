import React from 'react';
import behance_icon from '../../assets/behance_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.svg';
import dribbble_icon from '../../assets/dribbble_icon.svg';
import twitter_icon from '../../assets/twitter_icon.svg';
import Medium_icon from '../../assets/Medium_icon.svg';

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 my-12 mx-6 sm:mx-10 md:mx-16 lg:mx-20">
      <div className="flex gap-6 sm:gap-8 md:gap-10 my-6 sm:my-8 md:my-10">
        <a href="https://www.behance.net/smriti1225" target="_blank" rel="noopener noreferrer">
          <img src={behance_icon} alt="Behance" />
        </a>
        <a href="https://www.linkedin.com/in/smriti-d/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" />
        </a>
        <a href="https://dribbble.com/Smriti1225" target="_blank" rel="noopener noreferrer">
          <img src={dribbble_icon} alt="Dribbble" />
        </a>
        <a href="https://x.com/smriti_25_" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://medium.com/@smriti12sci.nvm_" target="_blank" rel="noopener noreferrer">
          <img src={Medium_icon} alt="Medium" />
        </a>
      </div>
      <hr className="w-full border-t border-white" />
      <div className="flex justify-center my-5">
        <p className="text-center text-sm sm:text-base">
          Made with ❤️ by Smriti
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1cUArM0S1zw_coz0m7giPhGOzGJ-ZolZ7/view?usp=sharing', '_blank'); 
  };
  
  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="flex flex-col items-center gap-9 mt-10">
      {/* Profile Image with responsive sizing */}
      <img src={profile_img} alt="Profile" className="mt-24 w-30 sm:w-52 md:w-48 lg:w-72" />
      {/* Headline with responsive text size */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold w-4/5">
        Hey there! <span className="bg-clip-text text-transparent bg-[#0F88A9]">I'm Smriti</span>, Developer and Designer
      </h1>
      {/* Description text with responsive size */}
      <p className="text-center text-base sm:text-lg md:text-xl font-normal w-4/5 md:w-3/5">
        I'm based in India and I've a keen interest in content writing, web development, and designing.
      </p>
      {/* Buttons with responsive styles */}
      <div className="flex items-center gap-5 text-sm sm:text-lg font-medium mb-12">
        <div 
          className="bg-[#0F88A9] text-white py-2 px-6 rounded-full cursor-pointer hover:border hover:border-white transition-all duration-300"
          onClick={handleConnectClick}
        >
          Connect with me
        </div>
        <div 
          onClick={handleResumeClick} 
          className="py-2 px-6 rounded-full border-2 border-white cursor-pointer hover:border-[#0F88A9] hover:text-[#0F88A9] transition-all duration-300"
        >
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;

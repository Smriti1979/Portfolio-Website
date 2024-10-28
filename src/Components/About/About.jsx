import React from 'react';
import smriti_img from '../../assets/smriti_img.svg';

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-12 my-16 mx-6 sm:mx-10 md:mx-20 lg:mx-40">
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">About me</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-24">
        {/* Image that is hidden on small screens and visible on medium and larger screens */}
        <div className="hidden md:block flex-shrink-0">
          <img src={smriti_img} alt="Smriti" className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[30rem] lg:max-w-xs" />
        </div>
        
        {/* Text content */}
        <div className="flex flex-col gap-5 text-center lg:text-left max-w-lg">
          <div className="flex flex-col gap-5 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            <p>Hey there! I’m Smriti, a UI/UX designer by passion, a full stack developer by logic, and a content writer by heart.</p>
            <p>Currently I'm a final year student at Dr. A.P.J. Abdul Kalam Technical University, I’m always exploring new ways to solve real-world problems. Whether it’s building engaging websites, developing full-fledged web apps, or writing stories that connect, I love combining creativity with functionality.</p>
            <p>Let’s code, design, and create something awesome together! 🎨💻</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

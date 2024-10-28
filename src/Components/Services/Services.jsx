import React from 'react';
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-12 my-16 mx-6 sm:mx-10 md:mx-20 lg:mx-40"
    >
      <div className="relative">
        <h1 className="text-3xl md:text-4xl font-semibold px-4 md:px-8 text-center">My Services</h1>
      </div>
      {/* Grid layout for services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-16 cursor-pointer">
        {Services_Data.map((service, index) => (
          <div
            className="w-full h-full p-5 rounded-xl border-2 border-white hover:scale-110 hover:bg-[#144663] hover:border-none transition-transform duration-300"
            key={index}
          >
            <h3 className="text-xl md:text-2xl font-semibold">{service.s_no}</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F88A9]">{service.s_name}</h2>
            <p className="text-white text-base md:text-lg leading-7 md:leading-8 max-w-xs">
              {service.s_desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

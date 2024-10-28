import React from 'react';
import mywork_data from '../../assets/mywork_data';

const Mywork = () => {
  return (
    <div id="work" className="flex flex-col items-center justify-center gap-12 my-16 mx-6 sm:mx-10 md:mx-20 lg:mx-40">
      {/* Header Section */}
      <div className="relative text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">My Work</h1>
        <img src="" alt="" />
      </div>
      
      {/* Grid Layout for Work Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-5">
        {mywork_data.map((work, index) => {
          return (
            <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img
                src={work.w_img}
                alt={work.w_title || "My Work Image"}
                className="w-full h-auto sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover cursor-pointer transition-transform duration-300 hover:scale-110 hover:rounded-lg"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Mywork;

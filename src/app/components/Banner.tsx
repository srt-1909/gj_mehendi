import React from 'react';

const BannerSection = () => {
  return (
    <div className="relative w-full">
      {/* Base banner image */}
      <div className="w-full">
        <img 
          src="image 1Banner.svg" 
          alt="Mehndi Art Banner"
          className="w-full h-auto"
        />
      </div>
      
      {/* Overlay image */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img 
          src="/Frame 14.png" 
          alt="Decorative Frame"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default BannerSection;
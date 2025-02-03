import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-pink-200">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-serif italic mb-8">
          JG Mehndi Art
        </h1>
        
        <h2 className="text-xl md:text-3xl font-semibold text-white mb-16">
          THE BEST MEHNDI ARTIST IN UDAIPUR
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-center">
            With 4 years of experience in mehndi art design, I specialize in 
            crafting intricate and unique patterns for all occasions. From 
            traditional bridal motifs to contemporary designs, each creation 
            reflects elegance, culture, and creativity. My passion ensures 
            every client receives a beautiful, personalized experience, making 
            their moments even more special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
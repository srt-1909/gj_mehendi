import React from 'react';

const WhyUsSection = () => {
  const features = [
    {
      icon: (
        <img src="/Vector.svg" alt="feature 1 icon" className="w-16 h-16 text-orange-400" />
      ),
      text: "Skin friendly and dark color mehendi - We make the henna paste with 100% natural heena powder, lemon juice and essential oils but still deliver great color and shade"
    },
    {
      icon: (
        <img src="/Vector (1).svg" alt="feature 2 icon" className="w-16 h-16 text-orange-400" />
      ),
      text: "We have artists with expertise in many types of mehendi patterns, most popular ones being the Arabic and Rajasthani designs"
    },
    {
      icon: (
        <img src="/Vector (2).svg" alt="feature 3 icon" className="w-16 h-16 text-orange-400" />
      ),
      text: "Exclusive Mehndi art discount! Book now for intricate, stunning designs at unbeatable prices. Call today to secure your appointment!"
    },
    {
      icon: (
        <img src="/Frame 25 2.svg" alt="feature 4 icon" className="w-16 h-16 text-orange-400" />
      ),
      text: "We Have evolved the traditional patterns of mehendi into intricate and decorative designs."
    }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif text-center italic text-gray-800 mb-16">
        Why Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-6">
              {feature.icon}
            </div>
            <p className="text-gray-600 leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsSection;

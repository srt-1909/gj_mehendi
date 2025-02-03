import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            JG Mehndi art is a celebrated style known for its exceptional intricacy 
            and creativity, seamlessly blending traditional motifs with modern flair. 
            It is characterized by fine, detailed lines, floral patterns, paisleys, 
            and geometric designs that reflect both aesthetic beauty and cultural 
            symbolism. This style is especially popular at weddings, festivals, and 
            other special occasions, where the application of mehndi symbolizes love, 
            good luck, and prosperity. JG Mehndi is revered for its precision and 
            elegance, making it a preferred choice for brides and those seeking 
            intricate body art. It has gained recognition for its timeless appeal 
            and its ability to capture cultural significance beautifully.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-pink-500">
            <img 
              src="/CYMERA_20231013_102843 1 (2).jpg" // Adjust to your image's name and extension
              alt="Intricate Mehndi designs on hands" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

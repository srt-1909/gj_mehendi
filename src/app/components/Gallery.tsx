import React from 'react';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

const Gallery = () => {
  const images: GalleryImage[] = [
    { id: 1, url: '/Screenshot 2025-01-06 171347.svg', alt: 'Bridal mehndi design on palms' },
    { id: 2, url: '/CYMERA_20230918_125945 1.svg', alt: 'Symmetrical bridal mehndi design' },
    { id: 3, url: '/Screenshot 2025-01-06 171700.png', alt: 'Intricate Arabic mehndi pattern' },
    { id: 4, url: '/Screenshot 2025-01-06 172104.png', alt: 'Modern geometric mehndi design' },
    { id: 5, url: '/Screenshot 2025-01-06 175009.png', alt: 'Traditional golden mehndi' },
    { id: 8, url: '/Screenshot 2025-01-06 175840.png', alt: 'Simple elegant mehndi design' },
    { id: 6, url: '/white.png', alt: 'Simple elegant mehndi design' },
    { id: 7, url: '/white.png', alt: 'Simple elegant mehndi design' },
    { id: 9, url: '/applying-5134308_1280.png', alt: 'Minimal mehndi pattern' },
    { id: 10, url: '/mehndi-designs-4678749_1280.png', alt: 'Floral mehndi design' },
    { id: 11, url: '/mehndi-design-4340955_1280.png', alt: 'Contemporary mehndi art' },
    { id: 12, url: '/mehndi-designs-4678756_1280.png', alt: 'Detailed bridal mehndi' },
    { id: 13, url: '/mehndi-designs-4678750_1280.png', alt: 'Traditional foot mehndi' },
    { id: 14, url: '/mehndi-design-4377731_1280.png', alt: 'Modern foot mehndi design' },


    { id: 15, url: '/white.png', alt: 'Bridal foot mehndi' },
    { id: 16, url: '/white.png', alt: 'Bridal foot mehndi' },
    { id: 17, url: '/CWuwAVRBivG.png', alt: 'Bridal foot mehndi' },
    { id: 18, url: '/19.png', alt: 'Traditional leg mehndi' },
    { id: 19, url: '/mehndi-6221087_1280.png', alt: 'Full leg mehndi design' },
    { id: 20, url: '/fe57e2cc2cb2f4fbcc8bb946b6c36a8c.png', alt: 'Intricate leg mehndi pattern' },
    { id: 21, url: '/mehandi-ideas.png', alt: 'Intricate leg mehndi pattern' },
    { id: 22, url: '/pexels-abcdeepakr-11019293.png', alt: 'Intricate leg mehndi pattern' }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-serif text-center mb-12">Gallery</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
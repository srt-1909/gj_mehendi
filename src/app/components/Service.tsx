import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => (
  <div className="flex flex-col items-center max-w-sm mx-auto">
    <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg bg-white mb-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center px-4">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Arabic Services",
      description: "Arabic Mehndi services offer intricate, traditional designs for special occasions.",
      imageUrl: "/Group 16.svg" // Update to actual image path in public folder
    },
    {
      title: "Bridal Services",
      description: "Exclusive bridal mehndi service, intricate designs, natural henna, personalized experience.",
      imageUrl: "/Group 7.svg" // Update to actual image path in public folder
    },
    {
      title: "Traditional Services",
      description: "Traditional mehndi service involves applying intricate henna designs for celebrations.",
      imageUrl: "/Group 10.svg" // Update to actual image path in public folder
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* <h2 className="text-3xl font-serif text-center mb-12">Services</h2> */}
      <img
    src="/Services.svg" // Update to point to your image in the public folder
    alt="Services"
    className="mx-auto mb-12" // Center the image and give it some margin below
  />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

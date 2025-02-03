import React from 'react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mitva suthar",
      text: "Stunning, intricate designs that made my event unforgettable! The artist's attention to detail was exceptional, and the mehndi lasted beautifully. Highly recommend for anyone seeking elegant, unique henna art."
    },
    {
      name: "Priyanka kumawat",
      text: "The mehndi design was absolutely flawless! The artist captured my vision perfectly, creating an elegant, intricate pattern that made my hands look stunning. It was a memorable experience, and I couldn't be happier with the results."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif text-center italic text-gray-800 mb-16">
        Testimonials
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/3">
          <img  
            src="/CYMERA_20231013_102843 1 (2).jpg"
            alt="Mehndi design showcase"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        
        <div className="lg:w-2/3 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex gap-4">
              <span className="text-4xl text-orange-400">&quot;</span>
              <div>
                <h3 className="font-medium text-lg mb-2">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
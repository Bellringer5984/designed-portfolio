import React from 'react';

const Services = () => {
  const services = [
    // Define your services here
    { title: 'Web Development', description: 'Building responsive and modern web applications using JavaScript, React, NextJS and more.' },
    { title: 'Backend Development', description: 'Developing robust server-side applications and APIs with Node.js and Python.' },
    { title: 'Database Management', description: 'Designing and managing efficient databases with SQL.' },
    // Add more services as needed
  ];

  return (
    <section id='service' className="bg-black text-white rounded-lg p-10 my-10 mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-portfolioGray rounded-lg p-4 hover:bg-portfolioHoverGray transition-colors duration-300">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

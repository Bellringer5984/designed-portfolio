import React from 'react';

const Portfolio = () => {
  const projects = [
    // Add your projects here
    { title: 'Project 1', description: 'Description of Project 1', image: 'url-to-image', link: '#'},
    { title: 'Project 2', description: 'Description of Project 2', image: 'url-to-image', link: '#'},
    // More projects
  ];

  return (
    <section className="bg-black text-white rounded-lg p-10 my-10 mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-portfolioGray rounded-lg p-4 hover:bg-portfolioHoverGray transition-colors duration-300">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
            {/* Here you can add an image or a placeholder */}
            <div className="w-full h-40 bg-orange-600 rounded-lg my-4"></div>
            {/* Link to the project */}
            <a href={project.link} className="text-orange-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

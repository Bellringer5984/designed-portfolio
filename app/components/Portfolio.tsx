import React from "react";
import Resume from "./Resume";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "Myoosik",
      description: "A social Media web app that connects like minded artists. ",
      image: "/myoosiclogo.png",
      link: "https://myoosik-339ac.web.app/",
    },
    {
      title: "Grandad's tech",
      description: "A storefront designed to sell retro technology",
      image: "/GrandadsTech.png",
      link: "https://github.com/Fab-Five-1/GraceShopper",
    },
    {
      title: "TrelloAI",
      description:
        "A trello clone that implements openAI api to have chatGPT summarize your day",
      image: "/TrelloAI.png",
      link: "https://github.com/Bellringer5984/trello_clone",
    },
    {
      title: "Download Sorter",
      description:
        "A script that organizes your downloads folder by creating sub-directories (images, videos, documentes, executables) and sorts files into them",
      image: "/PythonLogo.png",
      link: "https://github.com/Bellringer5984/download_sorting",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-black text-white rounded-lg p-10 my-10 mx-auto max-w-6xl"
    >
      <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-portfolioGray rounded-lg p-4 hover:bg-portfolioHoverGray transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
            <div className="w-full h-100 bg-orange-600 rounded-lg my-4 overflow-hidden">
              <Image
                src={project.image}
                width={600}
                height={400}
                alt={project.description}
                layout="fixed"
                objectPosition="center"
              />
            </div>
            <a href={project.link} className="text-orange-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
      <Resume />
    </section>
  );
};

export default Portfolio;

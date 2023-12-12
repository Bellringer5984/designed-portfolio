import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white rounded-lg p-10 my-10 mx-auto max-w-6xl"
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          {/* You can add your image here */}
          <div className="w-40 h-40 bg-orange-600 rounded-full mx-auto"></div>
        </div>
        <div className="md:w-2/3 md:pl-10">
          <p className="text-lg">
            "Hello! I&apos;m Caleb Bellmyer, a dedicated software developer with
            a strong focus on creating compelling and efficient web
            applications. My expertise in Fullstack development is bolstered by
            a versatile skill set in JavaScript, TypeScript, Python, and SQL. I
            am eager to explore how my abilities can contribute to solving your
            company's software development challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

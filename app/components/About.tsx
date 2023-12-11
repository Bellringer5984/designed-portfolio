import React from 'react'

const About = () => {
  return (
    <section className="bg-black text-white rounded-lg p-10 my-10 mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          {/* You can add your image here */}
          <div className="w-40 h-40 bg-orange-600 rounded-full mx-auto"></div>
        </div>
        <div className="md:w-2/3 md:pl-10">
          <p className="text-lg">
            {/* Insert your biography or introduction here */}
            Hello! I'm Caleb, a passionate software developer with a knack for building engaging and efficient web applications. With a background in Fullstack Academy and a diverse skill set in JavaScript, TypeScript, Python, and SQL, I am well-equipped to tackle challenging projects and deliver high-quality solutions.
          </p>
          {/* Add more content or paragraphs as needed */}
        </div>
      </div>
    </section>
  )
}

export default About
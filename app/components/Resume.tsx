'use client'
import ReactPDF from "@react-pdf/renderer";


const Resume = () => {
  return (
    <section className="bg-black text-white rounded-lg p-10 my-10 mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold mb-6">Resume</h2>

      <div className="resume-pdf-container">
        ReactPDF.render()
      </div>
    </section>
  );
};

export default Resume;

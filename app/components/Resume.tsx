"use client";
import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="resume"
      className="bg-black text-white rounded-lg my-10 mx-auto max-w-4xl"
    >
      <div className="pt-10 flex justify-center">
        <button
          onClick={openModal}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 focus:outline-none focus:shadow-outline"
        >
          View My Resume
        </button>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Resume;

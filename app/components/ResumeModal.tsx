import React from 'react';
import Image from 'next/image';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex ${!isOpen && 'hidden'}`} onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:max-w-2xl shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">My Resume</h3>
          <Image src="/Resume2.svg" alt="Caleb's Resume" width={1000} height={1400} layout="intrinsic" />
          <div className="mt-4">
            <button onClick={onClose} aria-label='Close modal' className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 focus:outline-none focus:shadow-outline">
              Close
            </button>
            <a href="/resumePDF.pdf" download className="text-orange-500 hover:text-orange-600 ml-4">
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

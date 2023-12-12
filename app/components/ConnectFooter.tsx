import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const ConnectFooter = () => {
  return (
    <footer id='contact' className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
        <p>You can reach me at: <a href="mailto:cjbellmyer5984@gmail.com" className="text-orange-500 hover:text-orange-600">cjbellmyer5984@gmail.com</a></p>
        <div className="flex justify-center mt-4">
          {/* Social Media Icons */}
          <a href="https://linkedin.com/in/caleb-bellmyer" className="text-white mx-2 hover:text-orange-500">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Bellringer5984" className="text-white mx-2 hover:text-orange-500">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/caleb_bellmyer" className="text-white mx-2 hover:text-orange-500">
            <FaXTwitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ConnectFooter;

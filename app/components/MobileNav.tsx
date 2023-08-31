
import React, { FC, useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';

const MobileNav: FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative flex justify-center w-full">
      <div className="flex bg-black justify-between rounded-full px-10 py-4 w-11/12 m-2">
        <div className="flex justify-between w-full">
          <div className="flex">
            <div className="bg-orange-600 rounded-full w-7 h-7"></div>
            <span className="text-white px-2 font-bold text-lg">Caleb</span>
          </div>
          <div onClick={toggleDropdown}>
            <MdOutlineMenu name="menu" className="flex text-white bg-red text-3xl" />
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="absolute bg-portfolioGray text-white rounded-lg px-10 py-4  mt-16 w-2/5 right-5 justify-center">
          <a href="#" onClick={toggleDropdown} className="block px-1 py-2">Home</a>
          <a href="#" onClick={toggleDropdown} className="block px-1 py-2">About</a>
          <a href="#" onClick={toggleDropdown} className="block px-1 py-2">Service</a>
          <a href="#" onClick={toggleDropdown} className="block px-1 py-2">Resume</a>
          <a href="#" onClick={toggleDropdown} className="block px-1 py-2">Projects</a>
          <a href="#" onClick={toggleDropdown} className="block px-1 py-2">Contact</a>
        </div>
      )}
    </div>
  );
};

export default MobileNav;


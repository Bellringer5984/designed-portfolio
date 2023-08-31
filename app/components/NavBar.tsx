import React from "react";

function NavBar() {
  const lineItemClassName = "text-white px-10 hover:text-orange-500";
  return (
    <div className="flex justify-center">
      <div className="flex bg-black justify-between rounded-full px-10 py-4 w-11/12 m-2">
        <ol className="flex ">
          <li>
            <a href="#" className={lineItemClassName}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={lineItemClassName}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={lineItemClassName}>
              Services
            </a>
          </li>
        </ol>
        <div className="flex">
          <div className="bg-orange-600  rounded-full w-7 h-7"></div>
          <span className="text-white px-2 font-bold text-lg">Caleb</span>
        </div>
        <ol className="flex">
          <li>
            <a href="#" className={lineItemClassName}>
              Resume
            </a>
          </li>
          <li>
            <a href="#" className={lineItemClassName}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" className={lineItemClassName}>
              Contact
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default NavBar;

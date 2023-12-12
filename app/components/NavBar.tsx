"use client";
import React, { FC, useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div id="home" className="flex justify-center">
      {windowWidth >= 1000 ? <DesktopNav /> : <MobileNav />}
    </div>
  );
};

export default NavBar;

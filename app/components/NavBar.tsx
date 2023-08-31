'use client'
import React, { FC, useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar: React.FC = () => { 
    // Use a conditional to check if window is defined
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1000
    );
    
    useEffect(() => {
        // Only attach the event listener if window is defined
        if (typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

  return (
    <div className="flex justify-center">
        {windowWidth >= 1000 ? <DesktopNav /> : <MobileNav />}
    </div>
  );
}

export default NavBar;

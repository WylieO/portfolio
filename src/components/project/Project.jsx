import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import '../Page.css'
import '../PageMobile.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if(width < 1250) {
    return false
  }
  return true
}

function Project() {
  const [isDesktop, setIsDesktop] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setIsDesktop(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isDesktop && <div className="page">
        <h1>Projects</h1>
        <Outlet/>
      </div>}
      {!isDesktop && <div className="page-mobile">
        <h5>Projects</h5>
        <Outlet/>
      </div>}
    </div>
  );
}

export default Project;

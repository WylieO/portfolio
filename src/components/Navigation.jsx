import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'
import './NavigationMobile.css'

import LinkedInIcon from './images/linkedin-icon.png'
import GithubIcon from './images/github-logo.png'
import EmailIcon from './images/email-icon.png'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if(width < 1250) {
    return false
  }
  return true
}

function Navigation() {

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
      {isDesktop && <div id="sidebar-design">
        <nav>
          <div id="sidebar">
            <div id="heading">
              <h3 id="name-heading">Wylie Oliver</h3>
              <h6 id="name-heading" style={{color: "#0087ca"}}>Mechanical Engineering</h6>
            </div>
            <div style={{height: '20vh'}}></div>
            <ul className="navigation">
                {/* <li className="navigation-item">
                  <NavLink className="nav-link" to="/portfolio">About Me</NavLink>
                </li>
                <li className="nav-space"></li> */}
                {/* <li className="navigation-item">
                  <NavLink className="nav-link" to="/education">Education</NavLink>
                </li> */}
                {/* <li className="nav-space"></li>
                <li className="navigation-item">
                  <NavLink className="nav-link" to="/experience">Work Experience</NavLink>
                </li>
                <li className="nav-space"></li> */}
                <li className="navigation-item">
                  <NavLink className="nav-link" to="/portfolio">Projects</NavLink>
                </li>
                <li className="nav-space"></li>
                <li className="navigation-item">
                  <NavLink className="nav-link" to="/resume">Resume</NavLink>
                </li>
            </ul>
          </div>
        </nav>
        <div id="nav-icons">
          <a href="https://github.com/WylieO" rel="noopener noreferrer" target="_blank">
            <img className="nav-icon" src={GithubIcon} width="40px" alt="GitHub"></img>    
          </a>
          <a href="https://www.linkedin.com/in/wylie-oliver-591a011a8/" rel="noopener noreferrer" target="_blank">
            <img className="nav-icon" src={LinkedInIcon} width="40px" alt="LinkedIn"></img>  
          </a>
          <a href="mailto:wylieo14@gmail.com" rel="noopener noreferrer" target="_blank">
            <img className="nav-icon" src={EmailIcon} width="40px" alt="Email"></img>    
          </a>
        </div>
      </div>}
      {!isDesktop && <div id="mobile-nav-bar">
        <h5 id="name-heading-mobile">Wylie Oliver</h5>
        <nav>
          {/* <NavLink className="nav-link-mobile" to="/portfolio">About Me</NavLink> */}
          <NavLink className="nav-link-mobile" to="/portfolio">Projects</NavLink>
          <NavLink className="nav-link-mobile" to="/resume">Resume</NavLink>
        </nav>
      </div>}
    </div>
  );
}

export default Navigation;

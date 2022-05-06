import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import HeadboardImage from "./images/headboard.png"
import KeyHolderImage from "./images/key_holder.png"
import KnifeHolderImage from "./images/knife_holder.png"
import CupHolderImage from "./images/cup_holder.png"

import "../Page.css"
import "../PageMobile.css"


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if(width < 1250) {
    return false
  }
  return true
}

function Projects() {

  const [isDesktop, setIsDesktop] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setIsDesktop(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let headboardDescription = "I have been needing a head board for some time and never really found one that I liked. I decided the best option would be to make one. I wanted a large one that could serve as a focal point in my room. It also needed to have some lighting built in. I attached two sconces to the top of the head board that can be turned on by a built-in switch. Also, they can be turned on and off with a smart assistant with smart lights."

  let keyHolderDescription = "Box designed in auto cade with interlapping finger joints then cut using a laser cutter. The box is made of ¼ inch plywood and is held together by wood glue. The box was designed to serve as a place to hold my wallet and keys.";

  let cupHolder = "A dual cup holder designed in solid works then 3-D printed. It was designed to be screwed into a beer die table or any other surface which might need to hold a beverage."

  let knifeHolderDescription = "The sheath was designed to be an improvement over the sheath that came with the blade. Features a double stitched pattern around the exterior of the sheath with the belt loop likewise being stitched to the sheath. It also has a riveted snap to keep it closed. "

  return (
    <div>
      {isDesktop && <div id="project-list">
        <div className="project">
          <img
            className="project-image"
            src={HeadboardImage}
            alt=""
          />
          <div className="project-description">
            <h4>Smart Light Head Board</h4>
            <p>{headboardDescription}</p>
          </div>
        </div>
        <div style={{height: "20px"}}></div>
   
          <div className="project">
            <img
              className="project-image"
              src={KeyHolderImage}
              alt=""
            />
            <div className="project-description">
              <h4>Laser Cut Key Holder</h4>
              <p>{keyHolderDescription}</p>
            </div>
          </div>

        <div style={{height: "20px"}}></div>
        <div className="project">
          <img
            className="project-image"
            src={CupHolderImage}
            alt=""
          />
          <div className="project-description">
            <h4>3D Printed Cup Holder</h4>
            <p>{cupHolder}</p>
          </div>
        </div>

        <div style={{height: "20px"}}></div>
          <div className="project">
            <img
              className="project-image"
              src={KnifeHolderImage}
              alt=""
            />
            <div className="project-description">
              <h4>Leather Knife Sheath</h4>
              <p>{knifeHolderDescription}</p>
            </div>
          </div>
      </div>
      }
      {!isDesktop && <div>
          <div className="project-mobile">
            <h6 className = "project-title-mobile">Smart Light Head Board</h6>
            <img
                  className="project-image-mobile"
                  src={HeadboardImage}
                  alt=""
            />
             <p className="project-description-mobile">{headboardDescription}</p>
          </div>
          <div className="project-mobile">
            <h6 className = "project-title-mobile">Laser Cut Key Holder</h6>
            <img
                  className="project-image-mobile"
                  src={KeyHolderImage}
                  alt=""
            />
           <p className="project-description-mobile">{keyHolderDescription}</p>
          </div>
          <div className="project-mobile">
            <h6 className = "project-title-mobile">3D Printed Cup Holder</h6>
            <img
                  className="project-image-mobile"
                  src={CupHolderImage}
                  alt=""
            />
            <p className="project-description-mobile">{cupHolder}</p>
          </div>
          <div className="project-mobile">
            <h6 className = "project-title-mobile">Leather Knife Sheath</h6>
            <img
                  className="project-image-mobile"
                  src={KnifeHolderImage}
                  alt=""
            />
            <p className="project-description-mobile">{knifeHolderDescription}</p>
          </div>
      </div>}
    </div>
  );
}

export default Projects;

import React, {useEffect, useState} from "react";
import "./Page.css"
import "./PageMobile.css"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  if(width < 1250) {
    return false
  }
  return true
}

function Resume() {
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
        <h1>Resume</h1>
        <iframe id="resume-document" src="https://onedrive.live.com/embed?cid=A776CB863D44DEDF&amp;resid=A776CB863D44DEDF%211757&amp;authkey=AK2-b6oKz_YTzCw&amp;em=2" title="Resume" frameborder="0" scrolling="no"></iframe>
      </div>}
      {!isDesktop && <div className="page-mobile">
          <h5>Resume</h5>
          <iframe id="resume-document-mobile" src="https://onedrive.live.com/embed?cid=A776CB863D44DEDF&amp;resid=A776CB863D44DEDF%211757&amp;authkey=AK2-b6oKz_YTzCw&amp;em=2" title="Resume" frameborder="0" scrolling="no"></iframe>
        </div>}
    </div>
  );
}

export default Resume;

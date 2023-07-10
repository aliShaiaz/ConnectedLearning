import React from "react";
import imageFiles from "../../files/_imageFiles";

const CoursePage = () => {
  return (
    <>
      {/* <h1>CoursePage</h1> */}
      <div className="coursePage">
        <div className="landingWallpaper">
          <div className="Background">
            <img
              className="darken"
              src={imageFiles.wallpaper_course}
              alt="Handshake"
            />
          </div>
          <div className="Foreground">
            <span>Home</span>
            <div className="flipH">〱</div>
            <span className="pageTitle">Contact</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;

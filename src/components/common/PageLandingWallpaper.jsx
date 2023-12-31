import React from "react";
import imageFiles from "../../files/_imageFiles";

const PageLandingWallpaper = ({ pageName }) => {
  return (
    <>
      <div className="landingWallpaper">
        <div className="Background">
          <img
            className="darken"
            src={imageFiles["wallpaper_" + pageName.toLowerCase()]}
            alt="Course"
          />
        </div>
        <div className="Foreground">
          <span className="home">Home</span>
          <img src={imageFiles.arrowRight} alt="" className="arrowRight" />
          <span className="pageTitle">{pageName}</span>
        </div>
      </div>
    </>
  );
};

export default PageLandingWallpaper;

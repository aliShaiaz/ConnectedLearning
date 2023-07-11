import React from "react";
import imageFiles from "../../files/_imageFiles";
// import CourseCards from "../common/CourseCard";
import CourseCards from "../common/courseCards/CourseCard.jsx";
import PageLandingWallpaper from "../common/PageLandingWallpaper";

const CoursePage = () => {
  return (
    <div className="coursePage">
      <div className="section_wallpaper">
        <PageLandingWallpaper pageName="Course" />
      </div>
      <div className="section_courses">
        <PageLandingWallpaper pageName="Course" />

        <img id="ourOnlineCourse" src={imageFiles.ourOnlineCourse} alt="" />

        <div id="couseList">
          <CourseCards />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;

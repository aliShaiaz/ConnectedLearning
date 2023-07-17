import React from "react";
import imageFiles from "../../files/_imageFiles";
// import CourseCards from "../common/CourseCard";
import CourseCards from "../common/courseCards/CourseCard.jsx";
import PageLandingWallpaper from "../common/PageLandingWallpaper";
import { motion } from "framer-motion";

const CoursePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="coursePage"
    >
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
    </motion.div>
  );
};

export default CoursePage;

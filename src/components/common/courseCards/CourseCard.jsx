import React, { useState } from "react";
import "./CourseCard.css";
import StarRating from "../5starRating/StarRating";
import imageFiles from "../../../files/_imageFiles";

import Courses from "../../../files/courseData/_courseInfo";

const CourseCard = ({ courseInfo }) => {
  return (
    <div className="courseCard" style={{ position: "relative" }}>
      <div id="courseImage">
        <img src={courseInfo.cover} alt="" />
        <div className="category">
          <p>{courseInfo.category}</p>
        </div>
      </div>
      <label id="courseLabel" htmlFor="">
        {courseInfo.title}
      </label>
      <div id="courseRating">
        <StarRating />
      </div>
      <div id="coursePrice">{courseInfo.price}</div>
      <button id="purchase">Book Now</button>

      {courseInfo.bestSeller && (
        <>
          <div className="elipse">
            <img src={imageFiles.bestSellerLogo} alt="" />
          </div>
          <label htmlFor="" className="bestSeller">
            Best Seller
          </label>
        </>
      )}
    </div>
  );
};

const CourseCards = () => {
  return (
    <>
      {Courses.map((course) => (
        <CourseCard key={course.id} courseInfo={course} />
      ))}
    </>
  );
};

export default CourseCards;

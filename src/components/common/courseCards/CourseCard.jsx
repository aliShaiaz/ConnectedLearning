import React, { useState } from "react";
import "./CourseCard.css";
import StarRating from "../5starRating/StarRating";
import imageFiles from "../../../files/_imageFiles";

import Courses from "../../../files/courseData/_courseInfo";

const CourseCard = ({ courseInfo }) => {
  return (
    <>
      <div className="courseCard">
        <div className="courseImage">
          <img src={courseInfo.cover} alt="" />
          <div className="category">
            <p>{courseInfo.category}</p>
          </div>
        </div>
        <label className="courseLabel" htmlFor="">
          {courseInfo.title}
        </label>
        <div className="courseRating">
          <StarRating />
        </div>
        <div className="coursePrice">{courseInfo.price}</div>

        <button className="purchase">Book Now</button>

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
    </>
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

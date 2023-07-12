import React from "react";
import "../../css/HomePage.css";
import imageFiles from "../../files/_imageFiles";
import CourseCards from "../common/courseCards/CourseCard";
import { Link } from "react-router-dom";
import Categories from "../common/categories/Categories";
import TeamMembers from "../common/teamMembers/TeamMembers";
import Testimonials from "../common/testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="homePage">
      <div id="landingArea">
        <img src={imageFiles.img1} alt="" className="img1" />
        <img src={imageFiles.mouse} alt="" className="mouse1" />
        <img src={imageFiles.mouse} alt="" className="mouse2" />
        <img src={imageFiles.vec1} alt="" className="vec1" />
        <img src={imageFiles.vec3} alt="" className="vec3" />
        <img src={imageFiles.vec4} alt="" className="vec4" />
        <img src={imageFiles.polygon} alt="" className="polygon" />
        <div className="gradCount">
          <img src={imageFiles.gradIcon} alt="" />
          <p>Graduations</p>
          <p id="p2">5.5 Year</p>
          <p id="p3">Counting</p>
          <p id="p4">100,585+</p>
        </div>
        <img src={imageFiles.txt1} alt="" className="txt1" />
        <p className="txt2">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a
          completeLorem ipsum dolor sit amet, consectetur adipi scing elit, sed
          do eiusm
        </p>

        <div className="partners">
          <img src={imageFiles.google} alt="" className="google" />
          <img src={imageFiles.ms} alt="" className="ms" />
          <img src={imageFiles.dribble} alt="" className="dribble" />
          <img src={imageFiles.lattice} alt="" className="lattice" />
        </div>
      </div>

      <div id="aboutUs">
        <div className="rec8" />
        <img src={imageFiles.img2} alt="" className="img2" />
        <img src={imageFiles.rec7} alt="" className="rec7" />
        <p className="title">About Us</p>
        <p className="heading">
          We are providing the best online digital courses.
        </p>
        <p className="body">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roo piece of classical Latin literature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, l ooked up one of the more obscure
          Latin words, consectetur, from a Lorem Ips um passage, and going
          through the cites of the word in classical literature, di scovered the
          undoubtable source.
          <br />
          <br />
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonoru et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on.
        </p>
        <Link to="/about">
          <img className="learnMore" src={imageFiles.btn_learnMore} />
        </Link>
      </div>

      <div id="courseList">
        <p className="title">Course List</p>
        <p className="heading">Find your Perfect Course</p>
        <div className="courseList">
          <CourseCards />
        </div>

        <Link to="/course">
          <img src={imageFiles.btn_viewAll} alt="" className="btn_viewAll" />
          {/* fadlksjf */}
        </Link>
      </div>
      <div id="service" className="noOverflow">
        <p className="title">Service</p>
        <p className="heading">Top Categories</p>
        <div className="categoriesSection">
          <Categories />
        </div>
      </div>
      <div id="tMem">
        <p className="title">Team Member</p>
        <p className="heading">
          Popular Professional
          <br />
          Teachers
        </p>
        <div className="empCard">
          <TeamMembers />
        </div>
      </div>
      <div id="testimonialSection">
        <p className="title">Testimonial</p>
        <p className="heading">What They Say?</p>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
          smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
          <br />
          <br />
          enderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>

        <img
          src={imageFiles.writeAssesment}
          alt=""
          className="writeAssesment"
          onClick={() => alert("Write Assesments!")}
        />

        <div className="testimonialsSec">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

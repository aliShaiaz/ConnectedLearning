import React from "react";
import imageFiles from "../files/_imageFiles";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
        <img src={imageFiles.Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/ConnectedLearning/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/ConnectedLearning/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/ConnectedLearning/course"
          >
            Course
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/ConnectedLearning/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div>
        <button onClick={() => alert("Logged In!")}>Login</button>
        <button onClick={() => alert("Signed Up!")}>Sign-Up</button>
      </div>
    </div>
  );
};

export default NavBar;

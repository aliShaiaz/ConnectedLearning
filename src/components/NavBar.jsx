import React from "react";
import imageFiles from "../files/_imageFiles";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <Link to="/">
          <img src={imageFiles.Logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/course"
            >
              Course
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <button>Login</button>
          <button>Sign-Up</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;

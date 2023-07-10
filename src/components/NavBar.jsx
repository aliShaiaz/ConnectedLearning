import React from "react";
import imageFiles from "../files/_imageFiles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <Link to="/">
          <img src={imageFiles.Logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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

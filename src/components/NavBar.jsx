import React from "react";
import imageFiles from "../files/imageFiles";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <img src={imageFiles.Logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Contact</li>
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

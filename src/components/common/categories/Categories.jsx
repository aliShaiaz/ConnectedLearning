import React from "react";
import "./Categories.css";
import imageFiles from "../../../files/_imageFiles";
import CategoriesInfo from "../../../files/categoryData/_categoryInfo";

const Category = ({ category }) => {
  return (
    <div className="category">
      <img src={category.icon} alt="" className="icon" />
      <p id="categoryTitle">{category.title}</p>
      <img src={imageFiles.vec5} alt="" className="vec5" />
      <img src={imageFiles.ellipse} alt="" className="ell2" />
      <img src={imageFiles.ellipse} alt="" className="ell3" />
    </div>
  );
};

const Categories = () => {
  return (
    <>
      {CategoriesInfo.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </>
  );
};

export default Categories;

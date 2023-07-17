import React from "react";
import "./Categories.css";
import imageFiles from "../../../files/_imageFiles";
import CategoriesInfo from "../../../files/categoryData/_categoryInfo";
import { motion } from "framer-motion";

const Category = ({ category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="category"
    >
      <img src={category.icon} alt="" className="icon" />
      <p id="categoryTitle">{category.title}</p>
      <img src={imageFiles.vec5} alt="" className="vec5" />
      <img src={imageFiles.ellipse} alt="" className="ell2" />
      <img src={imageFiles.ellipse} alt="" className="ell3" />
    </motion.div>
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

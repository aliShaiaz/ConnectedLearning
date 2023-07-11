import "./Testimonials.css";
import TestimonialsInfo from "../../../files/testimonialsData/_testimonialInfo";

import React, { useState } from "react";
import imageFiles from "../../../files/_imageFiles";

// const Testimonial = ({ testimonial }) => {
//   var rating = [];
//   for (let i = 0; i < testimonial.rating; i++) {
//     rating.push(<img src={imageFiles.star} className="rateStar" alt="" />);
//   }
//   return (
//     <div id="testimonial">
//       <img src={testimonial.photo} alt="" className="photo" />
//       <div className="testimony">
//         <p className="testBody">{testimonial.testimony}</p>
//         <p className="testName">{testimonial.name}</p>
//         <div className="testRating">{rating}</div>
//       </div>

//     </div>
//   );
// };

const Testimonials = () => {
  const [tNo, setTNo] = useState(0);
  var testimonial = TestimonialsInfo[tNo];
  const handleNextTm = () => {
    if (tNo + 1 === TestimonialsInfo.length) {
      setTNo(0);
    } else {
      setTNo(tNo + 1);
    }
  };

  var rating = [];
  for (let i = 0; i < testimonial.rating; i++) {
    rating.push(<img src={imageFiles.star} className="rateStar" alt="" />);
  }
  return (
    <div id="testimonial">
      <img src={testimonial.photo} alt="" className="photo" />
      <div className="testimony">
        <p className="testBody">{testimonial.testimony}</p>
        <p className="testName">{testimonial.name}</p>
        <div className="testRating">{rating}</div>
      </div>
      <img
        src={imageFiles.nextArrow}
        alt=""
        className="nextT"
        onClick={handleNextTm}
      />
    </div>
  );
};

export default Testimonials;

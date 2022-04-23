import React from "react";
import "./SingleCourse.scss";

const SingleCourse = ({ imgSrc, imgAlt, text }) => {
  return (
    <div className="Single-Course">
      <figure className="Single-CourseFigure">
        <img src={imgSrc} alt={imgAlt} className="Single-CourseImg" />
      </figure>
      <p className="Single-CourseText">{text}</p>
    </div>
  );
};

export default SingleCourse;

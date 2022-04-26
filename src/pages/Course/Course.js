// Import-components
import "./Course.scss";
import React from "react";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";

// Import-Images
import LectureImg1 from "../../assets/images/lecture-1.jpg";

// Import-Router
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header modifiers={["secondary"]} />
      <Main>
        <Section
          title={"1. Introduction"}
          actionText={"120+ Minutes"}
          buttonText={"Back"}
          buttonClickHandler={() => navigate(-1)}
        >
          <SingleCourse imgSrc={LectureImg1} imgAlt={"Single-CourseImg"} />
        </Section>
      </Main>
    </>
  );
};

export default Courses;

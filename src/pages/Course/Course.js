import "./Course.scss";
import React from "react";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import LectureImg1 from "../../assets/images/lecture-1.jpg";
import SingleCourse from "../../components/SingleCourse/SingleCourse";

const Courses = () => {
  return (
    <>
      <Header />
      <Main>
        <Section
          title={"1. Introduction"}
          actionText={"120+ Minutes"}
          buttonText={"Back"}
        >
          <SingleCourse
            imgSrc={LectureImg1}
            imgAlt={"Single-CourseImg"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
        </Section>
      </Main>
    </>
  );
};

export default Courses;

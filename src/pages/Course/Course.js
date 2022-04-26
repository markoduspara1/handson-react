import "./Course.scss";
import React from "react";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import LectureImg1 from "../../assets/images/lecture-1.jpg";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Main>
        <Section
          title={"1. Introduction"}
          actionText={"120+ Minutes"}
          buttonText={"Back"}
          buttonClickHandler={() => navigate(-1)}
        >
          <SingleCourse
            imgSrc={LectureImg1}
            imgAlt={"Single-CourseImg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec.  Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis."
            }
          />
        </Section>
      </Main>
    </>
  );
};

export default Courses;

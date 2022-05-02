import React, { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";

// Import-components
import "./Course.scss";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";

// Import-Router
import { useNavigate, useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setCourses(coursesMock);
  }, []);

  useEffect(() => {
    courses &&
      setCourse(...courses.filter(course => course.id === parseInt(id)));
  }, [courses, id]);

  const navigate = useNavigate();
  return (
    <>
      <Header isSecondary={true} />
      <Main>
        {course && (
          <Section
            title={course.title}
            actionText={course.subtitle}
            buttonText={"Back"}
            buttonClickHandler={() => navigate(-1)}
          >
            <SingleCourse
              imgSrc={course.imgSrc}
              imgAlt={course.imgalt}
              text={course.text}
            />
          </Section>
        )}
      </Main>
    </>
  );
};

export default Course;

// Import-components
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonal";
import { Grid } from "../../lib/style/generalStyles";
import { Loading, Clock } from "../../components/Loading/Loading";

//Import-Data
import coursesMock from "../../lib/mock/courses";

const Home = () => {
  const [courses, setCourses] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      console.log(courses);
    }, 1000);
  }, []);

  return (
    <>
      <Header />

      <Main>
        <section>
          <Landing />
        </section>

        <Section
          title={"Open new possibilites"}
          actionText={"Learn Something New"}
          buttonProps={{
            buttonText: "More Courses",
            buttonStyle: ["heading", "outline"],
            buttonClickHandler: () => navigate("/Courses"),
          }}
        >
          {courses && (
            <Grid>
              {courses.map(
                (course, index) =>
                  index <= 3 && (
                    <CourseCard
                      key={course.id}
                      courseId={course.id}
                      imgSrc={course.imgSrc}
                      imgAlt={course.imgAlt}
                      title={course.title}
                      subtitle={course.subtitle}
                    />
                  )
              )}
            </Grid>
          )}
        </Section>
        <Section isHeadingVisible={false} modifiers={["testimonials"]}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";

//Import-components
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Search from "../../components/SearchBar/SearchBar";
import { Grid } from "../../lib/style/generalStyles";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      console.log(courses);
    }, 1000);
  }, []);

  return (
    <>
      <Header isSecondary={true} />
      <Main>
        <Section title={"All Lectures"} SearchBar>
          {courses && (
            <Grid>
              {courses.map(
                (course, index) =>
                  index <= 9 && (
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
      </Main>
    </>
  );
};

export default Courses;

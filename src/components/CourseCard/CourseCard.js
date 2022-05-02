import { CourseLink, Figure, Image, Title, Subtitle } from "./CourseCardStyle";

const CourseCard = ({ courseId, imgSrc, imgAlt, title, subtitle }) => {
  return (
    <CourseLink to={`/Course/${courseId}`}>
      <Figure>
        <Image src={imgSrc} alt={imgAlt} />
      </Figure>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CourseLink>
  );
};

export default CourseCard;

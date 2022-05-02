import React from "react";

import {
  Testimonial,
  Figure,
  Content,
  TestimonialImg,
  Text,
  Quotation,
} from "./TestimonialStyles";

import Img from "../../assets/images/testimonial.jpg";

const Testimonials = () => {
  return (
    <Testimonial>
      <Figure>
        <TestimonialImg src={Img} alt="Testimonials" />
      </Figure>
      <Content>
        <Text>
          <Quotation>"</Quotation>
          At the academy, I learned how to apply technology in practice.
          Frontend education was demanding, it required a lot of time. Upon
          completion, I got my first job as a developer.
          <Quotation>"</Quotation>
        </Text>
      </Content>
    </Testimonial>
  );
};

export default Testimonials;

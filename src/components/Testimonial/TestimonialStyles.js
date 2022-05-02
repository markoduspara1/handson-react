import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Testimonial = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
  row-gap: 15px;

  @media screen and (${breakpoints.tabletSmall}) {
    row-gap: 35px;
  }

  @media screen and (${breakpoints.tablet}) {
    row-gap: 45px;
  }

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Figure = styled.figure`
  justify-self: center;
  align-self: center;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  @media screen and (${breakpoints.desktop}) {
    width: 350px;
    height: 350px;
  }
`;

export const TestimonialImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  @media screen and (${breakpoints.desktop}) {
    padding-left: 120px;
  }
`;

export const Text = styled.p`
  justify-self: center;
  align-self: center;
  font-size: 30px;
  line-height: 180%;
  color: ${colors.textSecondary};
`;

export const Quotation = styled.span`
  font-size: 48px;
`;

import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Section = styled.section`
  padding: 60px 24px;

  @media screen and (${breakpoints.desktop}) {
    padding: 120px 0;
  }

  ${props =>
    props.isTestimonials &&
    `
    background-color: ${colors.bgSecondary};
    `}
`;

export const Inner = styled.div`
  @media screen and (${breakpoints.desktop}) {
    width: 960px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 1260px;
  }
`;

export const ActionText = styled.span`
  display: block;
  color: ${colors.primary};
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Heading = styled.div`
  margin-bottom: 64px;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: ${colors.textPrimary};
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 32px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
    margin-bottom: 0;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 36px;
  }
`;

// const TitleStyle = css`
//   color: ${colors.textPrimary};
//   font-size: 26px;
//   font-weight: 500;
//   margin-bottom: 32px;

//   @media screen and (${breakpoints.tablet}) {
//     font-size: 32px;
//     margin-bottom: 0;
//   }

//   @media screen and (${breakpoints.desktop}) {
//     font-size: 36px;
//   }
// `;

// .Section {
//   padding: 60px 24px;

//   @media screen and (#{$desktop}) {
//     padding: 120px 0;
//   }

//   &-Testimonials {
//     background-color: $colorBgSecondary;
//   }

//   &-Inner {
//     @media screen and (#{$desktop}) {
//       width: 960px;
//       margin: 0 auto;
//     }

//     @media screen and (#{$desktopLarge}) {
//       width: 1260px;
//     }
//   }

//   &-ActionText {
//     display: block;
//     color: $colorPrimary;
//     font-weight: 500;
//     margin-bottom: 24px;
//   }

//   &-Heading {
//     margin-bottom: 64px;

//     @media screen and (#{$tablet}) {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }
//   }

//   &-Title {
//     color: $colorTextPrimary;
//     font-size: 26px;
//     font-weight: 500;
//     margin-bottom: 32px;

//     @media screen and (#{$tablet}) {
//       font-size: 32px;
//       margin-bottom: 0;
//     }

//     @media screen and (#{$desktop}) {
//       font-size: 36px;
//     }
//   }
// }

import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const SingleCourse = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;

  @media screen and (${breakpoints.tablet}) {
    width: 350px;
    height: 350px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 450px;
    height: 450px;
  }
`;

export const SingleCourseImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 180%;
  color: ${colors.textPrimary};
  @media screen and (${breakpoints.tablet}) {
    padding-left: 48px;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    padding-left: 64px;
  }
`;

// .SingleCourse {
//   @media screen and (#{$tablet}) {
//     display: flex;
//     justify-content: space-between;
//     gap: 50px;
//   }

//   &-Figure {
//     width: 100%;
//     height: auto;
//     border-radius: 16px;
//     overflow: hidden;
//     margin-bottom: 32px;

//     @media screen and (#{$tablet}) {
//       width: 350px;
//       height: 350px;
//       margin-bottom: 0;
//       flex-shrink: 0;
//     }

//     @media screen and (#{$desktopLarge}) {
//       width: 450px;
//       height: 450px;
//     }
//   }

//   &-Img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   &-Text {
//     font-size: 16px;
//     line-height: 180%;
//     color: $colorTextPrimary;
//     @media screen and (#{$tablet}) {
//       padding-left: 48px;
//     }
//     @media screen and (#{$desktopLarge}) {
//       padding-left: 64px;
//     }
//   }
// }

import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, breakpoints } from "../../lib/style/theme";

export const Landing = styled.div`
  position: relative;
  height: 100vh;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const OverlayPrimary = styled.div`
  position: absolute;
  left: 0;
  width: 27%;
  height: 100%;
  background-color: ${colors.primary};
`;

export const OverlaySecondary = styled.div`
  position: absolute;
  right: 0;
  width: 73%;
  height: 100%;
  background-color: ${colors.black};
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: calc((100% - 1260px) / 2);
  width: 1260px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 0;
`;

export const Inner = styled.div`
  margin: 0 auto;
  @media screen and (${breakpoints.tabletSmall}) {
    width: 450px;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 550px;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 960px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 1280px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  width: 300px;
  color: ${colors.bgPrimary};
  margin-bottom: 24px;

  @media screen and (${breakpoints.tabletSmall}) {
    width: 450px;
    font-size: 56px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 180%;
  color: ${colors.bgPrimary};
  width: 300px;
  margin-bottom: 48px;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 18px;
  }
`;

export const ButtonLink = styled(Link)``;

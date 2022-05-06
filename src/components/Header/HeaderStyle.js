import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import { colors, breakpoints } from "../../lib/style/theme";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 24px;

  ${props =>
    props.isSecondary &&
    `
    background-color: ${colors.textPrimary};
    position: initial;
  `}

  @media (${breakpoints.desktop}) {
    padding: 32px 0;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.desktop}) {
    width: 960px;
    margin: 0 auto;
    padding: 32px 0;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 1260px;
  }
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
  width: 140px;
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  color: ${colors.bgPrimary};
  letter-spacing: 1px;
  margin-right: 48px;
`;

export const ButtonLink = styled(Link)`
  margin-right: 24px;
  display: inline-block;

  &:last-child {
    margin-right: 0px;
  }
`;

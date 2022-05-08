import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import { NavLink } from "react-router-dom";

export const Menu = styled.nav`
  width: 100%;
  z-index: 1;

  @media screen and (${breakpoints.mobileLarge}) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.bgPrimary};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
  }
`;

export const MenuLink = styled(NavLink)`
  font-size: 1.5rem;
  text-align: center;

  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${colors.textPrimary};
    text-decoration: none;
    transition: color 0.3s linear;
  }

  &:hover {
    color: ${colors.primary};
  }
`;

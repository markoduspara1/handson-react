import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors } from "../../lib/style/theme";

export const Button = styled.button`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: 16px;
  width: 220px;
  background-color: ${colors.bgPrimary};
  color: ${colors.primary};
  border-radius: 30px;
  font-weight: 500;
  text-transform: uppercase;

  ${props =>
    props.isSecondary &&
    `
    background: ${colors.primary};
      color: ${colors.bgPrimary};
  `}

  ${props =>
    props.isNav &&
    `
    width: 150px;

      &:hover {
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px ${colors.black};
      }
  `}

${props =>
    props.isOutline &&
    `
    border: 1px solid ${colors.primary};
  `}

${props =>
    props.isHeading &&
    `
    width: 200px;
  `}

  &:hover {
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0 3px 3px ${colors.textPrimary});
  }
`;

import styled from "styled-components";
import { breakpoints } from "../../lib/style/theme";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  z-index: 10;

  &:focus {
    outline: none;
  }
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }

  div {
    background: #ffffff;
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#000000ad" : "#ffffff")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

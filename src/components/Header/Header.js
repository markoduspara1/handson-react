import React from "react";
import { useState, useRef } from "react";
import { ClickOutside } from "../../lib/Hooks/ClickOutside";

import LogoImg from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";

import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  Nav,
  HeaderNavLink,
  ButtonLink,
} from "./HeaderStyle";

const Header = ({ isSecondary }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  ClickOutside(node, () => setOpen(false));

  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="Academy Logo" />
        </LogoLink>
        <div ref={node}>
          <Hamburger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Nav>
          <HeaderNavLink
            style={({ isActive }) => (isActive ? "#ffffff" : "#bf3939ef")}
            to="/Courses"
          >
            Courses
          </HeaderNavLink>
          <ButtonLink to="/Sign-in">
            <Button buttonStyle={["nav"]}>Sign in</Button>
          </ButtonLink>
          <ButtonLink to="/Register">
            <Button buttonStyle={["nav", "secondary"]}>Register</Button>
          </ButtonLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

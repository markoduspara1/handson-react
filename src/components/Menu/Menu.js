import React from "react";
import { bool } from "prop-types";
import { Menu as MenuStyled, MenuLink } from "./MenuStyled";

const Menu = ({ open }) => {
  return (
    <MenuStyled open={open}>
      <MenuLink to="/Courses">Courses</MenuLink>
      <MenuLink to="/Signin">Sign In</MenuLink>
      <MenuLink to="/Register">Register</MenuLink>
    </MenuStyled>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;

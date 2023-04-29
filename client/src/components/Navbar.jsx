import React from "react";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Taps = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Taps>Home</Taps>
          <Taps>About</Taps>
          <Taps>Add Post</Taps>
          <Taps>Blogs</Taps>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";

import logo from "../../assets/dokhona.png";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant='h6' className={classes.title}color='inherit'>
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />
            Dokhona
          </Typography>

          <div className={classes.grow} />

          <MenuItem variant='h6' className={classes.button} color='inherit'>
            Category
            <Menu>
              Dokhona
            </Menu>
          </MenuItem>

          <MenuItem component={Link} to="/login" variant='h6' className={classes.button} color='inherit'>
            Login
          </MenuItem>
          <MenuItem component={Link} to="/logout" variant='h6' className={classes.button} color='inherit'>
            Logout
          </MenuItem>


          {location.pathname !== "/cart" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

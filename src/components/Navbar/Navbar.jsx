import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';

import logo from '../../assets/dokhona.png'

const Navbar = () => {
    const classes = useStyles();
  return (
    <>
    <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography >
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Dokhona
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
  
    </>
  )
  
};

export default Navbar;

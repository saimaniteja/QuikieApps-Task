import React, { Fragment } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "../Assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bg: {
    backgroundColor: '#1F4678',
    padding: '5px 20px'
  }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar className={classes.bg}>
          <img src={logo} alt='' />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
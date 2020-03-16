import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  TypographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.TypographyStyles}>
          This is Header
        </Typography>
        <FreeBreakfastIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

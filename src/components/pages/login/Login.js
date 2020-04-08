import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  loginPageContainer: {
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Grid container className={classes.loginPageContainer}>
      <Grid item xs={6}>
        Login Form
      </Grid>
    </Grid>
  );
}
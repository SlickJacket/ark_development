import React from "react";
import LoginForm from "./LoginForm"
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "../../App.css";

const useStyles = makeStyles(theme => ({
  signupPageContainer: {
    backgroundImage:
      "url('https://russiabusinesstoday.com/wp-content/uploads/2018/07/diamonds.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center"
    }
    
  },
  formSection: {
    backgroundColor: "white",
    height: "100%"
  }
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Grid container className={classes.signupPageContainer} justify="flex-end">
      <Grid item xs={9} md={6} >
        <Paper elevation={3} square className={classes.formSection}>
          <LoginForm/>
        </Paper>
      </Grid>
    </Grid>
  );
}
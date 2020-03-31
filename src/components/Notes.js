import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  notesPageContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0
    }
  }
}));

export default function Notes() {
  const classes = useStyles();

  return (
    <Grid className={classes.notesPageContainer} container direction="column">
      <Grid item>
        <Typography>Notes</Typography>
      </Grid>
    </Grid>
  );
}
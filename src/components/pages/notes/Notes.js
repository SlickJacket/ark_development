import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  notesPageContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0
    }
  },
  noteFolderContainer: {
    backgroundColor: "#E7E7E7",
    height: "40em",
    textAlign: "center"
  },
  notePaper: {
    backgroundColor: "white",
    height: "40em",
    textAlign: "center"
  }
}));

export default function Notes() {
  const classes = useStyles();

  return (
    <Grid className={classes.notesPageContainer} container direction="row" justify="space-between">
      <Grid item xs={3} className={classes.noteFolderContainer}>
      <Paper className={classes.noteFolderContainer}>
        <Typography>Notes / Folders</Typography>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.notePaper}>
        <Typography>Note Paper</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
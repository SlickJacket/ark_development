import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

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
  },
  contentTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
}));

export default function Notes() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.notesPageContainer}
      container
      direction="row"
      justify="space-between"
    >
      <Grid item xs={3} className={classes.noteFolderContainer}>
        <Paper className={classes.noteFolderContainer}>
          <Typography>Notes / Folders</Typography>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.notePaper}>
          <Grid container direction="row" justify="center">
            <Grid item xs={11}>
              <Typography variant="h4">Title</Typography>
            </Grid>
            <Grid item xs={11}>
              <TextField
                id="standard-multiline-flexible"
                // label="Add a Note"
                placeholder="Add a Note"
                variant="standard"
                multiline
                // rowsMax="4"
                fullWidth
                // value="Multiline Value"
                // onChange={handleChange("multiline")}
                className={classes.contentTextField}
                margin="normal"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

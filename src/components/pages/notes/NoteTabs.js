import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import '../../App.css'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "1.3em"
  }
}));

export default function NoteTabs() {
  const classes = useStyles();

  const testTabArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const renderNoteTabs = () => {
    return testTabArray.map(tab => (
      <Grid item xs={12}>
        <Paper variant="outlined" square className={classes.paper}>
          <Typography>Note Title {tab}</Typography>
        </Paper>
      </Grid>
    ));
  };

  return (
    <React.Fragment>
      <Grid container direction="row" className="noteFolderContainer">
        {renderNoteTabs()}
      </Grid>
    </React.Fragment>
  );
}

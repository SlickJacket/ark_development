import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  resourcesPageContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0
    }
  }
}));

export default function Resources() {
  const classes = useStyles();

  return (
    <Grid className={classes.resourcesPageContainer} container direction="column">
      <Grid item>
        <Typography>Resources</Typography>
      </Grid>
    </Grid>
  );
}

  // componentDidMount = () => {
  //   fetch("https://current-precious-metal-price.p.rapidapi.com/metals/v1/0", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
  //       "x-rapidapi-key": "5cca9ead13mshea08d07b8faee70p107493jsnc4838177f4b2"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {this.setState({gold: data})})
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

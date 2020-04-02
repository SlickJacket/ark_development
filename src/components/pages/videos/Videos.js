import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Paper from "@material-ui/core/Paper";
import ReactSearchBox from "react-search-box";
import theme from "../../Theme";

import "../../App.css";

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  videosPageContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0
    }
  },
  mainContainer: {
    width: "100%"
  },
  videoItemContainer: {
    // backgroundColor: "red"
  },
  addCircle: {
    fonstSize: "large"
  },
  filterButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.secondary.main,
      border: "1px solid #262626"
    }
  },
  uploadButton: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.primary.main,
      border: "1px solid #A6141A"
    }
  },
  filterUploadBar: {
    paddingTop: "1em"
  }
}));

export default function Videos() {
  const classes = useStyles();
  const videosArray = ["1", "2", "3", "4", "1", "2", "3", "4", "4", "5"];

  const data = [
    {
      key: "john",
      value: "John Doe"
    },
    {
      key: "jane",
      value: "Jane Doe"
    },
    {
      key: "mary",
      value: "Mary Phillips"
    },
    {
      key: "robert",
      value: "Robert"
    },
    {
      key: "karius",
      value: "Karius"
    }
  ];

  return (
    <Grid
      className={classes.videosPageContainer}
      alignItems="center"
      container
      direction="column"
      // spacing={2}
    >
      <Grid item className={classes.mainContainer}>
        <Grid container justify="center" direction="row" spacing={5}>
          <Grid item xs={12}>
            <Grid container justify="space-around" className={classes.filterUploadBar}>
              <Grid item>
                <Button
                  color="secondary"
                  className={classes.filterButton}
                  startIcon={<FilterListIcon />}
                >
                  Filter
                </Button>
              </Grid>
              <Grid item xs={5} sm={4} className={classes.searchBarContainer}>
                <ReactSearchBox
                  placeholder="Search"
                  data={data}
                  callback={record => console.log(record)}
                  dropDownHoverColor={theme.palette.common.red}
                />
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  className={classes.uploadButton}
                  startIcon={<AddCircleIcon />}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Divider />
          </Grid>
          {videosArray.map(video => (
            <Grid item xs={12} lg={6} className={classes.videoItemContainer}>
              <Paper elevation={2}>
                <Grid container spacing={3} justify="space-evenly">
                  <Grid item xs={7}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/k6iRzpP8Zkk"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography>Video Title {video}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="p">
                          Impractical Jokers: The Movie is a 2020 American
                          reality comedy film directed by Chris Henchy...
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

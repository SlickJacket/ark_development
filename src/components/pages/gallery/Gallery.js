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
  galleryPageContainer: {
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
  galleryItemContainer: {
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
    padding: "1em"
  }
}));

export default function Gallery() {
  const classes = useStyles();
  const galleryArray = ["1", "2", "3", "4", "1", "2", "3", "4", "4", "5"];

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
      className={classes.galleryPageContainer}
      alignItems="center"
      container
      direction="column"
    >
      <Grid item className={classes.mainContainer}>
        <Grid container justify="center" direction="row" spacing={5}>
          <Grid item xs={12}>
            <Grid
              container
              justify="space-around"
              className={classes.filterUploadBar}
            >
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
          <Grid item xs={11}>
            <Grid container>
              {galleryArray.map(video => (
                <Grid item lg={3}>
                  <img
                    style={{ width: "265px" }}
                    src="https://i.etsystatic.com/12439953/r/il/667d5d/1133054533/il_570xN.1133054533_g0yq.jpg"
                    alt="test photo"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

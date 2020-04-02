import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
  }
}));

export default function Videos() {
  const classes = useStyles();
  const videosArray = ["1", "2", "3", "4", "1", "2", "3", "4", "4"];

  return (
    <Grid
      className={classes.videosPageContainer}
      alignItems="center"
      container
      direction="column"
    >
      <Grid item className={classes.mainContainer}>
        <Grid container justify="center" direction="row" spacing={5}>
          <Grid item xs={6}>
            <Button color="secondary" startIcon={<FilterListIcon />}>
              Filter
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button color="secondary" startIcon={<AddCircleIcon />}>
              Upload
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {videosArray.map(video => (
            <Grid item xs={10} lg={5} className={classes.videoItemContainer}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/k6iRzpP8Zkk"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid>
                <Grid item xs={5}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography>Video Title {video}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="p">
                        Impractical Jokers: The Movie is a 2020 American reality
                        comedy film directed by Chris Henchy, based on the truTV
                        television series Impractical Jokers.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

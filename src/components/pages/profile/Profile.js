import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import coverImg from "../../../assets/space130.jpg";

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  profilePageContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0
    }
  },
  mainInfoContainer: {
    textAlign: "center",
    height: "35em"
  },
  videosContainer: {
    backgroundColor: "red",
    textAlign: "center",
    height: "15em"
  },
  galleryContainer: {
    backgroundColor: "blue",
    textAlign: "center",
    height: "20em"
  },
  postsContainer: {
    backgroundColor: "green",
    textAlign: "center",
    height: "40em"
  },
  paper: {
    borderRadius: 1
  },
  coverImageContainer: {
    height: "60px"
  },
  coverImage: {
    width: "100%"
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.profilePageContainer}>
      <Grid item>
        <Grid container direction="row" justify="center">
          <Grid item className={classes.mainInfoContainer} xs={11} md={12}>
            <Grid container justify="center">
              <Grid item xs={10}>
                <Paper className={classes.paper}>
                  <Grid container direction="row">
                    <Grid item xs={12}>
                      <img className={classes.coverImage} src={coverImg} />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justify="space-around" spacing={9}>
                        <Grid item xs={5}>
                          <Typography>Profile img and info</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography>Summary</Typography>
                          <Typography>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete account of the
                            system, and expound the actual teachings of the
                            great explorer of the truth, the master-builder of
                            human happiness. No one rejects, dislikes, or avoids
                            pleasure itself, because it is pleasure, but because
                            those who do not know how to pursue pleasure
                            rationally encounter consequences that are extremely
                            painful.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Divider />
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Typography>Completed Projects:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>Open Projects:</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center">
          <Grid item className={classes.videosContainer} xs={11} md={10}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Videos</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center">
          <Grid item className={classes.galleryContainer} xs={11} md={10}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Gallery</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center">
          <Grid item className={classes.postsContainer} xs={11} md={10}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Posts</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

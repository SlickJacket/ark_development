import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ReactSearchBox from "react-search-box";
import theme from "./ui/Theme";
import InboxTreeView from "./ui/InboxTreeView";
import MailBox from "./ui/MailBox";

import "./App.css";

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  inboxPageContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0
    }
  },
  searchBarContainer: {
    textAlign: "center"
  },
  sideBarContainer: {
    textAlign: "center"
  },
  mailContainer: {
    backgroundColor: "blue",
    textAlign: "center"
  },
  composeButton: {
    width: "100%"
  }
}));

export default function Inbox() {
  const classes = useStyles();

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
    <Grid className={classes.inboxPageContainer} container direction="row">
      <Grid item lg={12} className={classes.searchBarContainer}>
        <ReactSearchBox
          placeholder="Search"
          data={data}
          callback={record => console.log(record)}
          dropDownHoverColor={theme.palette.common.red}
        />
      </Grid>
      <Grid item className={classes.sideBarContainer} lg={4}>
        <Button variant="contained" color="secondary" startIcon={<AddIcon />} className={classes.composeButton}>
          <Typography>Compose</Typography>
        </Button>
        <InboxTreeView />
      </Grid>
      <Grid item className={classes.mailContainer} lg={8}>
        <MailBox />
      </Grid>
    </Grid>
  );
}

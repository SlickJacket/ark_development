import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import logo from "../../assets/COA_Logo.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "6em"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar>
            <img alt="Company Logo" src={logo} className={classes.logo} />
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Inbox" />
              <Tab className={classes.tab} label="Profile" />
              <Tab className={classes.tab} label="Videos" />
              <Tab className={classes.tab} label="Gallery" />
              <Tab className={classes.tab} label="Resources" />
              <Tab className={classes.tab} label="Analytics" />
              <Tab className={classes.tab} label="Settings" />
              <Tab className={classes.tab} label="Logout" />
            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

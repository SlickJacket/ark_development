import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    marginLeft: "15px"
  },
  button: {
    ...theme.typography.estimate,
    width: "15%",
    marginLeft: "50px",
    textTransform: "none"
  },
  menu: {
      backgroundColor: theme.palette.primary.main,
      color: "white" 
  },
  menuItem: {
      ...theme.typography.tab,
      opacity: 0.6,
      "&:hover": {
          opacity: 1
      }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/admin/inbox" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/admin/profile" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/admin/videos" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/admin/gallery" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/admin/resources" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/admin/analytics" && value !== 5) {
      setValue(5);
    } else if (window.location.pathname === "/admin/settings" && value !== 6) {
      setValue(6);
    }
  }, [value]);

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar>
            <Button
              component={Link}
              to="/admin/inbox"
              disableRipple
              onClick={() => setValue(0)}
            >
              <img alt="Company Logo" src={logo} className={classes.logo} />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Quote Calculator
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/admin/inbox"
                label="Inbox"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/admin/profile"
                label="Profile"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/admin/videos"
                label="Videos"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/admin/gallery"
                label="Gallery"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={event => handleClick(event)}
                to="/admin/resources"
                label="Resources"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/admin/analytics"
                label="Analytics"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/admin/settings"
                label="Settings"
              />
              <Tab className={classes.tab} component={Link} label="Logout" />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{paper: classes.menu}}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              <MenuItem
                component={Link}
                to="/admin/resources"
                onClick={() => {
                  handleClose();
                  setValue(4);
                }}
                classes={{root: classes.menuItem}}
              >
                Resources
              </MenuItem>
              <MenuItem
                component={Link}
                to="/admin/metal-prices"
                onClick={() => {
                  handleClose();
                  setValue(4);
                }}
                classes={{root: classes.menuItem}}
              >
                Metal Prices
              </MenuItem>
              <MenuItem
                component={Link}
                to="/admin/stones"
                onClick={() => {
                  handleClose();
                  setValue(4);
                }}
                classes={{root: classes.menuItem}}
              >
                Stones
              </MenuItem>
              <MenuItem
                component={Link}
                to="/admin/notes"
                onClick={() => {
                  handleClose();
                  setValue(4);
                }}
                classes={{root: classes.menuItem}}
              >
                Notes
              </MenuItem>
            </Menu>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

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
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em"
    }
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
      marginLeft: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em"
    }
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
    textTransform: "none",
    borderRadius: 0
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.6,
    "&:hover": {
      opacity: 1
    }
  },
  iconContainer: {
    marginRight: "auto"
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: "Resources", link: "/admin/resources" },
    { name: "Stones", link: "/admin/resources" },
    { name: "Notes", link: "/admin/resources" }
  ];

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

    switch (window.location.pathname) {
      case "/admin/inbox":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/admin/profile":
        if (value !== 1) {
          setValue(1);
        }
        break;

      case "/admin/videos":
        if (value !== 2) {
          setValue(2);
        }
        break;

      case "/admin/gallery":
        if (value !== 3) {
          setValue(3);
        }
        break;

      case "/admin/resources":
        if (value !== 4) {
          setValue(4);
          setSelectedIndex(0);
        }
        break;
      case "/admin/stones":
        if (value !== 4) {
          setValue(4);
          setSelectedIndex(1);
        }
        break;
      case "/admin/notes":
        if (value !== 4) {
          setValue(4);
          setSelectedIndex(2);
        }
        break;
      case "/admin/analytics":
        if (value !== 5) {
          setValue(5);
        }
        break;

      case "/admin/settings":
        if (value !== 6) {
          setValue(6);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <Fragment>
      <Button variant="contained" color="primary" className={classes.button}>
        Metal Cost Calculator
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
        <Tab className={classes.tab} label="Logout" />
      </Tabs>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={event => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        Example Drawer
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.iconContainer}
        disableRipple
      >
        <MenuIcon color="primary" className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary">
          <ToolBar>
            {matches ? drawer : null}
            <Button
              component={Link}
              to="/admin/inbox"
              disableRipple
              onClick={() => setValue(0)}
            >
              <img alt="Company Logo" src={logo} className={classes.logo} />
            </Button>
            {matches ? null : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

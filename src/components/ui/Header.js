import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
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
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

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

const permDrawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    height: "100px",
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: permDrawerWidth,
    justifyContent: "center"
  },
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
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
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
    borderRadius: 0,
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "130px"
    }
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
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: "12rem"
  },
  drawerList: {
    marginTop: "2rem"
  },
  drawerLogo: {
    height: "7em"
  },
  drawerItem: {},
  drawerLogoutbutton: {},
  drawerItemText: {
    ...theme.typography.tab,
    color: "white",
    textAlign: "center"
  },
  permDrawer: {
    width: permDrawerWidth,
    flexShrink: 0
  },
  permDrawerLogo: {
    height: "10em",
    paddingTop: "none"
  },
  permDrawerPaper: {
    width: permDrawerWidth,
    backgroundColor: theme.palette.primary.main
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
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
        classes={{ paper: classes.drawer }}
      >
        <Button
          component={Link}
          to="/admin/inbox"
          disableRipple
          onClick={() => setValue(0)}
        >
          <img alt="Company Logo" src={logo} className={classes.drawerLogo} />
        </Button>
        <Divider/>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Metal Cost Calculator
        </Button>
        <Divider />
        <List className={classes.drawerList} disablePadding>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/inbox"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Inbox
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/profile"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Profile
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/videos"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Videos
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/gallery"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Gallery
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/resources"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Resources
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/analytics"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Analytics
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/settings"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Settings
            </ListItemText>
          </ListItem>
          <ListItem
            className={[classes.drawerItem, classes.drawerLogoutbutton]}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/login"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Logout
            </ListItemText>
          </ListItem>
        </List>
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
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar} color="secondary">
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
      <Drawer
        className={classes.permDrawer}
        variant="permanent"
        classes={{
          paper: classes.permDrawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Button
          component={Link}
          to="/admin/inbox"
          disableRipple
          onClick={() => setValue(0)}
        >
          <img alt="Company Logo" src={logo} className={classes.permDrawerLogo} />
        </Button>
        <Divider />
        <List className={classes.drawerList} disablePadding>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/inbox"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              <InboxIcon /> Inbox
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/profile"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Profile
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/videos"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Videos
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/gallery"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Gallery
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/resources"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Resources
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/analytics"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Analytics
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/settings"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Settings
            </ListItemText>
          </ListItem>
          <ListItem
            className={[classes.drawerItem, classes.drawerLogoutbutton]}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/login"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              Logout
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.toolbarMargin} />
    </div>
  );
}

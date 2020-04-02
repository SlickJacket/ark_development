import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MailIcon from "@material-ui/icons/Mail";
import FaceIcon from "@material-ui/icons/Face";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FlareOutlinedIcon from "@material-ui/icons/FlareOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    height: "100px",
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: permDrawerWidth,
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "90px"
    }
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.5em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em"
    }
  },
  logo: {
    height: "7em",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
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
    marginLeft: "auto",
    textTransform: "none",
    borderRadius: 0,
    [theme.breakpoints.down("md")]: {
      width: "20%"
    },
    [theme.breakpoints.down("sm")]: {
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
    marginTop: "2rem",
    justifyContent: "center"
  },
  drawerLogo: {
    height: "7em"
  },
  drawerItem: {},
  drawerItemText: {
    ...theme.typography.tab,
    color: "white",
    textAlign: "center"
  },
  permDrawer: {
    width: permDrawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
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
  //   toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  table: {
    minWidth: 650,
    marginRight: "auto"
  },
  tableContainer: {
    width: "50rem",
    marginRight: "auto"
  },
  expandIcons: {
    color: "white"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const routes = [
    { name: "Inbox", link: "/admin/inbox", value: 0, icon: <MailIcon /> },
    { name: "Profile", link: "/admin/profile", value: 1, icon: <FaceIcon /> },
    { name: "Videos", link: "/admin/videos", value: 2, icon: <YouTubeIcon /> },
    {
      name: "Gallery",
      link: "/admin/gallery",
      value: 3,
      icon: <PhotoLibraryIcon />
    },
    {
      name: "Resources",
      link: "/admin/resources",
      value: 4,
      icon: <LibraryBooksIcon />
    },
    {
      name: "Analytics",
      link: "/admin/analytics",
      value: 5,
      icon: <AssessmentIcon />
    },
    {
      name: "Settings",
      link: "/admin/settings",
      value: 6,
      icon: <SettingsIcon />
    }
  ];

  useEffect(() => {
    routes.forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.value) {
            setValue(route.value);
          }
          break;
        default:
          break;
      }
    });
  }, [value, routes]);

  const tabs = (
    <Fragment>
      <TableContainer
        component={Paper}
        className={classes.tableContainer}
        style={{ borderRadius: "0", boxShadow: "none" }}
      >
        <Table
          className={classes.table}
          aria-label="Precious Metal Prices"
          size="small"
          style={{ backgroundColor: theme.palette.secondary.main }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: theme.palette.primary.main,
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              ></TableCell>
              <TableCell
                style={{
                  color: "white",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                Gold
              </TableCell>
              <TableCell
                style={{
                  color: "white",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                Silver
              </TableCell>
              <TableCell
                style={{
                  color: "white",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                Platinum
              </TableCell>
              <TableCell
                style={{
                  color: "white",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                Paladium
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                style={{
                  color: "white",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1rem"
                }}
                align="right"
              >
                Per Troy Ounce:
              </TableCell>
              <TableCell
                style={{
                  color: "green",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                $1,648.90
              </TableCell>
              <TableCell
                style={{
                  color: "green",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                $14.77
              </TableCell>
              <TableCell
                style={{
                  color: "green",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                $754.35
              </TableCell>
              <TableCell
                style={{
                  color: "green",
                  borderBottom: "none",
                  fontWeight: "700",
                  fontSize: "1.2rem"
                }}
                align="center"
              >
                $2,292.20
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" className={classes.button}>
        Metal Cost Calculator
      </Button>
    </Fragment>
  );

  const dashboard = (
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
        {routes.map(route =>
          route.name !== "Resources" ? (
            <ListItem
              className={classes.drawerItem}
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.value);
              }}
              component={Link}
              to={route.link}
              selected={value === route.value}
            >
              <ListItemText
                className={classes.drawerItemText}
                disableTypography
              >
                {route.icon} {route.name}
              </ListItemText>
            </ListItem>
          ) : (
            <Fragment>
              {" "}
              <ListItem
                className={classes.drawerItem}
                divider
                button
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(4);
                }}
                component={Link}
                to="/admin/resources"
                selected={value === 4}
              >
                <ListItemText
                  className={classes.drawerItemText}
                  disableTypography
                >
                  <LibraryBooksIcon /> Resources
                </ListItemText>
                {openMenu ? (
                  <ExpandLess
                    className={classes.expandIcons}
                    onClick={() => setOpenMenu(false)}
                  />
                ) : (
                  <ExpandMore
                    className={classes.expandIcons}
                    onClick={() => setOpenMenu(true)}
                  />
                )}
              </ListItem>
              <Collapse in={openMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested} component={Link}
                to="/admin/stones">
                    <ListItemText
                      className={classes.drawerItemText}
                      disableTypography
                    >
                      <FlareOutlinedIcon /> Stones
                    </ListItemText>
                  </ListItem>
                  <ListItem button className={classes.nested} component={Link}
                to="/admin/notes">
                    <ListItemText
                      className={classes.drawerItemText}
                      disableTypography
                    >
                      <CreateOutlinedIcon /> Notes
                    </ListItemText>
                  </ListItem>
                </List>
              </Collapse>
            </Fragment>
          )
        )}
        <ListItem
          className={classes.drawerItem}
          divider
          button
          onClick={() => setOpenDrawer(false)}
          component={Link}
          to="/admin/login"
        >
          <ListItemText className={classes.drawerItemText} disableTypography>
            <ExitToAppIcon /> Logout
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
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
        <Divider />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Metal Cost Calculator
        </Button>
        <Divider />
        <List className={classes.drawerList} disablePadding>
          {routes.map(route => (
            <ListItem
              className={classes.drawerItem}
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.value);
              }}
              component={Link}
              to={route.link}
              selected={value === route.value}
            >
              <ListItemText
                className={classes.drawerItemText}
                disableTypography
              >
                {route.icon} {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            className={classes.drawerItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/admin/login"
          >
            <ListItemText className={classes.drawerItemText} disableTypography>
              <ExitToAppIcon /> Logout
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
      {matches ? null : dashboard}

      <div className={classes.toolbarMargin} />
    </div>
  );
}

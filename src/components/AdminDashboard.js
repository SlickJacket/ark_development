import React from 'react'
import Header from "./header/Header";
import Inbox from "./pages/inbox/Inbox";
import Profile from "./pages/profile/Profile";
import Videos from "./pages/videos/Videos";
import Gallery from "./pages/gallery/Gallery";
import Resources from "./pages/resources/Resources";
import Stones from "./pages/stones/Stones";
import Notes from "./pages/notes/Notes";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

export default function AdminDashboard() {

    const renderHeader = () => {
        if (window.location.href.indexOf("signup") === -1 && window.location.href.indexOf("login") === -1 ) {
          return <Header/>;
        }
      };


  return (
    <ThemeProvider theme={theme}>
      {renderHeader()}
      <Switch>
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/signup" component={Signup} />
        <Route exact path="/admin/inbox" component={Inbox} />
        <Route exact path="/admin/profile" component={Profile} />
        <Route exact path="/admin/videos" component={Videos} />
        <Route exact path="/admin/gallery" component={Gallery} />
        <Route exact path="/admin/resources" component={Resources} />
        <Route exact path="/admin/stones" component={Stones} />
        <Route exact path="/admin/notes" component={Notes} />
        <Route exact path="/admin/metal-calculator" component={Resources} />
        <Route exact path="/admin/analytics" component={Analytics} />
        <Route exact path="/admin/settings" component={Settings} />
      </Switch>
    </ThemeProvider>
  );
}
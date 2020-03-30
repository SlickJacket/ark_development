import React from "react";
import Header from "../components/ui/Header";
import Inbox from "../components/Inbox";
import Profile from "../components/Profile"
import Videos from "./Videos.js"
import Gallery from "../components/Gallery"
import Resources from "../components/Resources";
import Stones from "../components/Stones"
import Notes from "../components/Notes"
import Analytics from "../components/Analytics"
import Settings from "../components/Settings"


import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
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

export default App;

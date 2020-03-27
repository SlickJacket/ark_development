import React from "react";
import Header from "../components/ui/Header";
import Inbox from "../components/Inbox"
import Resources from "../components/Resources"

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/admin/inbox" component={Inbox}/>
          <Route exact path="/admin/profile" component={Inbox}/>
          <Route exact path="/admin/videos" component={Inbox}/>
          <Route exact path="/admin/gallery" component={Inbox}/>
          <Route exact path="/admin/resources" component={Resources}/>
          <Route exact path="/admin/analytics" component={Inbox}/>
          <Route exact path="/admin/settings" component={Inbox}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

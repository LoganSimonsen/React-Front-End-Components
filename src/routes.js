import React from "react";
import {Switch} from "react-router-dom";
import {BrowserRouter as Route} from "react-router-dom";
import App from "./App";
import OptionPage from './components/OptionPage';

export default(
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/OptionPage" component={OptionPage}/>
    <Route
      path="*"
      render={() => (
      <div>
        <p>Not Found</p>
      </div>
    )}/>
  </Switch>
);
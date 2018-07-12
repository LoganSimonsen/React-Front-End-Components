import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import OptionPage from './components/OptionPage';
import Shipments from './components/shipments/Shipments';
import Batches from './components/batches/Batches';
import Pickups from './components/pickups/Pickups';
import Tracking from './components/tracking/Tracking';


export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/OptionPage" component={OptionPage} />
    <Route exact path="/Shipments" component={Shipments} />
    <Route exact path="/Batches" component={Batches} />
    <Route exact path="/Pickups" component={Pickups} />
    <Route exact path="/Tracking" component={Tracking} />
    <Route
      path="*"
      render={() => (
        <div>
          <p>Not Found</p>
        </div>
      )} />
  </Switch>
);
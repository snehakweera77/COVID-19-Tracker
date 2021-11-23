import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CovidApp from "./components/CovidApp";
import Help from "./components/Help";
import Navbar from "./components/Navbar";
import Paper from "./components/Paper";
import StaySafe from "./components/StaySafe";
import Symptoms from "./components/Symptoms";

class App extends Component {
  render() {
    return (
      <Paper>
        <div className="root">
          <div className="navBar">
            <Navbar />
          </div>
          <div className="mainContent">
            <Switch>
              <Route exact path="/" render={() => <CovidApp />} />
              <Route exact path="/symptoms" render={() => <Symptoms />} />
              <Route exact path="/stay-safe" render={() => <StaySafe />} />
              {/*<Route
                exact
                path="/essentials"
                render={() => <Help isDarkMode={isDarkMode} />}
              />*/}
              <Route path="/" render={() => <CovidApp />} />
            </Switch>
          </div>
        </div>
      </Paper>
    );
  }
}

export default App;

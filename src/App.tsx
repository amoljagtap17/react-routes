import * as React from "react";
import "./styles.css";

import { Navbar } from "./Navbar";
import { Search } from "./Search";
import { Home } from "./Home";
import { TypeDashboard } from "./TypeDashboard";
import { CatDashboard } from "./CatDashboard";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboards/type/:typeId">
            <TypeDashboard />
          </Route>
          <Route path="/dashboards/:categoryId">
            <CatDashboard />
          </Route>
          <Route path="/faq" render={() => <h1>FAQ</h1>} />
          <Route path="/about" render={() => <h1>ABOUT</h1>} />
          <Route render={() => <h1>Four Oh Four!</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

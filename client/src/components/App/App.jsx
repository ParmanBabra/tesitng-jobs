import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "components/App/App.css";

import Numbers from "components/Numbers/Numbers";
import Map from "components/Map/Map";
import Cv from "components/CV/Cv";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">Job Testing</h3>
              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link" to="/">
                  Numbers
                </Link>
                <Link className="nav-link" to="/map">
                  Map
                </Link>
                <Link className="nav-link" to="/cv">
                  CV
                </Link>
              </nav>
            </div>
          </header>

          <main role="main" className="inner cover mt-5">
            <Switch>
              <Route path="/cv">
                <Cv />
              </Route>
              <Route path="/map">
                <Map />
              </Route>
              <Route path="/">
                <Numbers />
              </Route>
            </Switch>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>
                Web Job Testing By{" "}
                <a href="mailto:parmanbabra2529@gmail.com">Nakarin Satayasai</a>
                .
              </p>
            </div>
          </footer>
        </Router>
      </Fragment>
    );
  }
}

export default App;

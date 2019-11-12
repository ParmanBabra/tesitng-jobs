import React, { Component } from 'react';
import { compose } from "redux";

import { withRouter } from "react-router-dom";
import withAuth from "components/withAuth";
import logo from 'logo.svg';
import 'components/App/App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

export default compose(
  withRouter,
  withAuth
)(App);

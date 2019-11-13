import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.css";
import "index.css";

import App from "components/App/App";

import * as serviceWorker from "serviceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faUtensils,
  faMapMarker,
  faAddressCard,
  faPhone,
  faEnvelope,
  faBrush,
  faPlug,
  faProjectDiagram,
  faFilm
} from "@fortawesome/free-solid-svg-icons";


library.add(
  fab,
  faUtensils,
  faMapMarker,
  faAddressCard,
  faPhone,
  faEnvelope,
  faBrush,
  faPlug,
  faProjectDiagram,
  faFilm
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

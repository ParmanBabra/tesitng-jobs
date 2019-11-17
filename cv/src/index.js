import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookF,
  faLine,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
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
  faFilm,
  faFacebookF,
  faLine,
  faLinkedin,
  faTwitter
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

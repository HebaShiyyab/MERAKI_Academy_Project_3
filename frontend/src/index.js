import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";
import { register } from "./serviceWorker";
import { RestfulProvider } from "restful-react";

ReactDOM.render(
  <RestfulProvider base="http://localhost:3001">
    <Provider store={store}>
      <App />
    </Provider>
  </RestfulProvider>,
  document.getElementById("root")
);
register();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { schoolStore } from "./redux/store/schoolStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={schoolStore}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);

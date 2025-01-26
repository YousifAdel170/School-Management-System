// Import React, ReactDom
import React from "react";
import ReactDOM from "react-dom/client";

// Main app component
import App from "./App";

// For routing
import { BrowserRouter } from "react-router-dom";

// For Redux
import { Provider } from "react-redux"; // To connect Redux
import { schoolStore } from "./redux/store/schoolStore"; // The Redux store

// styles for the app
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={schoolStore}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);

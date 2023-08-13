import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./shared/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

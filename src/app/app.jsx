import { AppRouter } from "./app.router";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FullCont from "./components/FullCont";
import { Provider } from "react-redux";
import store from "./store";
import Results from "./components/Results";
import pipes from "./images/12.jpg";

const App = () => {
  return (
    <Provider store={store}>
      <Router >
        <div
          className="image-container set-full-height"
          style={{ backgroundImage: `url(${pipes})` }}
        >
          <Route exact path="/" component={FullCont} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

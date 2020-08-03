import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";

const Hats = () => (
  <div>
    <h1>Hi there from hats page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </div>
    </Router>
  );
}

export default App;

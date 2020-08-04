import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </div>
    </Router>
  );
}

export default App;

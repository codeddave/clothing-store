import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import User from "./components/User/User";

function App() {
  return (
    <Router>
      <div className="App container">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import { connect } from "react-redux";
import { setCurrentUser } from ".//redux/user/userAction";
import Checkout from "./components/Checkout/Checkout";

function App({ currentUser }) {
  return (
    <Router>
      <div className="App container">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <User />)}
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

// get state from rootReducer and destructure user from state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);

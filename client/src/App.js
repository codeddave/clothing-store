import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/userAction";
import Spinner from "./components/Spinner/Spinner";
const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const CheckoutPage = lazy(() => import("./components/Checkout/Checkout"));
const ShopPage = lazy(() => import("./components/Shop/Shop"));
const UserPage = lazy(() => import("./components/User/User"));

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <Router>
      <div className="App container">
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />

            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <User />)}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

// get state from rootReducer and destructure user from state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from ".//redux/user/userAction";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //gets user data from database
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

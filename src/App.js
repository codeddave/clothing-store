import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  state = {
    currenUser: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({
        currenUser: user,
      });
      console.log(user);
      console.log(this.state.user);
    });
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

export default App;

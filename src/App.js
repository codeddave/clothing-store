import React from "react";
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
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from ".//redux/user/userAction";
import Checkout from "./components/Checkout/Checkout";
import {selectCollectionsForPreview} from "./redux/shop/shopSelectors"

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, collectionsObject } = this.props;
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
      //Not passing the entire collectionsObject, don't need the RoutName and id
      const collectionDetailsToAdd = (collectionsObject) => {
            collectionsObject.map(({title, items}) =>({ title, items }))
      }
      addCollectionAndDocuments('collections', collectionDetailsToAdd(collectionsObject))
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
            <Route path="/shop" component={Shop} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <User />
              }
            />
            <Route exact path ="/checkout" component={Checkout}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

// get state from rootReducer and destructure user from state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  collectionsObject: selectCollectionsForPreview(state)
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

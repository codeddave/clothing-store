import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";

import CollectionOverview from "../CollectionOverview/CollectionOverview";
import {firestore, convertCollectionsSnapsotToMap} from "../../firebase/firebase.util"

class Shop extends React.Component {
 unsubscribeFromSnapShot = null;

 componentDidMount() {
    const collectionRef= firestore.collection('collections')
   
    collectionRef.onSnapshot(async snapShot => {
         const coll= convertCollectionsSnapsotToMap(snapShot)
         console.log(coll)
    })
 }
  render () {


     const {match} = this.props
  return (
    <div className="">
      <Route exact path={`${match.path}`} component={CollectionOverview} />

      <Route path = {`${match.path}/:collectionId`}component={CollectionPage} />
    </div>
  );
  }
 
}

export default Shop;

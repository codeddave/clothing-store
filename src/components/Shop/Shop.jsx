import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";

import CollectionOverview from "../CollectionOverview/CollectionOverview";

class Shop extends React.Component {
 
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

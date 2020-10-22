import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";

import CollectionOverview from "../CollectionOverview/CollectionOverview";

function Shop({ match }) {
  return (
    <div className="">
      <Route exact path={`${match.path}`} component={CollectionOverview} />

      <Route path = {`${match.path}/:collectionId`}component={CollectionPage} />
    </div>
  );
}

export default Shop;

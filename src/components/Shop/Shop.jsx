import React from "react";
import { Route } from "react-router-dom";
import CategoryPage from "../CategoryPage/CategoryPage";

import CollectionOverview from "../CollectionOverview/CollectionOverview";

function Shop({ match }) {
  return (
    <div className="">
      <Route exact path={`${match.path}`} component={CollectionOverview} />

      <Route component={CategoryPage} />
    </div>
  );
}

export default Shop;

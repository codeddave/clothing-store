import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import Spinner from "../Spinner/Spinner";

const CollectionOverviewContainer = lazy(() =>
  import("../CollectionOverview/CollectionOverviewContainer")
);
const CollectionContainer = lazy(() =>
  import("../Collection/CollectionContainer")
);
const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(Shop);

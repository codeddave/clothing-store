import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import CollectionOverviewContainer from "../CollectionOverview/CollectionOverviewContainer";
import CollectionContainer from "../Collection/CollectionContainer";
import { fetchCollectionsStartSaga } from "../../redux/shop/shopSaga";
class Shop extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(Shop);

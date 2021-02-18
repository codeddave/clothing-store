import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";
import {connect} from "react-redux"
import CollectionOverview from "../CollectionOverview/CollectionOverview";
import {fetchCollectionsStartAsync} from "../../redux/shop/shopActions"
import WithSpinner from "../WithSpinner/WithSpinner";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class Shop extends React.Component {
  state = {
    loading: true 
  }
 componentDidMount() {
 const {fetchCollectionsStartAsync} = this.props

 fetchCollectionsStartAsync()
 }
  render () {
     const {match, isCollectionFetching} = this.props
  return (
    <div className="">
      <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
      <Route path = {`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>} />
    </div>
  );
  }
 
}

const mapStateToProps = (state) => ({
  isCollectionFetching: selectIsCollectionFetching(state)
})
const mapDispatchToProps = (dispatch)=> ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(Shop);

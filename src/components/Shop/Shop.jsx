import React from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux"
import {fetchCollectionsStartAsync} from "../../redux/shop/shopActions"
import CollectionOverviewContainer from "../CollectionOverview/CollectionOverviewContainer";
import CollectionContainer from "../Collection/CollectionContainer";
class Shop extends React.Component {
  state = {
    loading: true 
  }
 componentDidMount() {
 const {fetchCollectionsStartAsync, } = this.props

 fetchCollectionsStartAsync()
 }
  render () {
     const {match, } = this.props
  return (
    <div className="">
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
      <Route path = {`${match.path}/:collectionId`} component={CollectionContainer}/>
    </div>
  );
  }
 
}

const mapDispatchToProps = (dispatch)=> ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(null, mapDispatchToProps)(Shop);

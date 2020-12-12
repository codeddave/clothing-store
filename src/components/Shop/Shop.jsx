import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";
import {connect} from "react-redux"
import CollectionOverview from "../CollectionOverview/CollectionOverview";
import {firestore, convertCollectionsSnapsotToMap} from "../../firebase/firebase.util"
import {updateCollections} from "../../redux/shop/shopActions"
import WithSpinner from "../WithSpinner/WithSpinner";





const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class Shop extends React.Component {


  state = {
    loading: true 
  }
 unsubscribeFromSnapShot = null;
 componentDidMount() {
  const {updateCollections} = this.props
    const collectionRef= firestore.collection('collections')
   
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
         const collectionsMap= convertCollectionsSnapsotToMap(snapShot)
         
         //updates shop reducer with data from Firebase
         updateCollections(collectionsMap)
         this.setState({loading: false})
    })
 }
  render () {


     const {match} = this.props
  return (
    <div className="">
      <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={this.state.loading} {...props}/>} />

      <Route path = {`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>} />
    </div>
  );
  }
 
}


const mapDispatchToProps = (dispatch)=> ({
  updateCollections: (collectionMap)=> dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(Shop);

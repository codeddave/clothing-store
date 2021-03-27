import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
import {compose} from "redux"
import { selectIsCollectionLoaded } from "../../redux/shop/shopSelectors"
import CollectionPage from "../CollectionPage/CollectionPage"
import WithSpinner from "../WithSpinner/WithSpinner"


const mapStateToProps = createStructuredSelector ({
    isLoading: (state)=> !selectIsCollectionLoaded(state)
})


const CollectionContainer = compose (
    connect(mapStateToProps), 
    WithSpinner
)(CollectionPage)

export default CollectionContainer
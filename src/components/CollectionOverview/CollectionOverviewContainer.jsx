import {createStructuredSelector} from "reselect"
import {selectIsCollectionFetching} from "../../redux/shop/shopSelectors"
import {connect} from "react-redux"
import WithSpinner from "../WithSpinner/WithSpinner"
import CollectionOverview from "./CollectionOverview"
import {compose} from 'redux'




const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
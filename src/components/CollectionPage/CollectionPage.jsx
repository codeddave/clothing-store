import React from 'react'
import {connect} from "react-redux"
import {selectCollection} from "../../redux/shop/shopSelectors"
import "./CollectionPage.scss"

 function CollectionPage({collection}) {
     
     console.log(collection);
     
    return (
        <div>
            
        </div>
    )
}


const mapStateToProps = (state, ownProps)=> ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)     
})
export default connect(mapStateToProps)(CollectionPage)
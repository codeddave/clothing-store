import React from 'react'

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"; 
import {selectCollectionsForPreview} from "../../redux/shop/shopSelectors"
import "./CollectionOverview.scss"
import Collection from "../Collection/Collection";


function CollectionOverview({collections, match}) {
    return (

        <div className="collection-overview">
             {collections.map(({ id, ...otherData }) => (
            <Collection key={id} match ={match} {...otherData} />
          ))}
        </div>
       
    )

    
}
 

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)
import React from 'react'
import {connect} from "react-redux"
import {selectCollection} from "../../redux/shop/shopSelectors"
import CollectionItem from '../CollectionItem/CollectionItem'
import "./CollectionPage.scss"


 function CollectionPage({collection, match}) {
     
     const {items, title,} = collection
     
    return (
        <div className="collection-page">
            <div >
              <h2 className="title" >{title}</h2>  
            </div>
            

            <div className="items">

                {
                    items.map(item => <CollectionItem  key={item.id} item = {item} />)
                }
            </div>

        </div> 
    )
}


const mapStateToProps = (state, ownProps)=> ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)     
})
export default connect(mapStateToProps)(CollectionPage)
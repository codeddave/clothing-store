import React, { Component } from "react";
import {connect} from "react-redux"
import{createStructuredSelector} from "reselect"
import {selectShopCollections} from "../../redux/shop/shopSelectors"
import SHOP_DATA from "../../redux/shop/Shop.data";
import Collection from "../Collection/Collection";

function Shop({collections}){
  
  
    return (
      <div className="">
        {collections.map(({ id, ...otherData }) => (
          <Collection key={id} {...otherData} />
        ))}
      </div>
    );
  }


const mapstateToProps = createStructuredSelector ({

  collections: selectShopCollections
})
export default connect(mapstateToProps)(Shop);

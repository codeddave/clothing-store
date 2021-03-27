import React from "react";
import "./Collection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import {useHistory} from "react-router-dom"


function Collection({ title, items, routeName, match  }) {
  let history = useHistory()
  return (
    <div className="collection ">

      <h1 onClick={()=> history.push(`${match.url}/${routeName}`)} >{title.toUpperCase()}</h1>
      <div className="preview   ">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
export default Collection;

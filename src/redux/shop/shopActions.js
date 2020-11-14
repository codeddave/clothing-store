
import {shopActionTypes} from "./shopActionTypes"

export const updateCollections =(collectionsMap)=>( {
    type: shopActionTypes.UPDATE_COLLECTIONS, 
    payload: collectionsMap,
})
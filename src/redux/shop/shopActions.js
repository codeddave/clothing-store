
import { convertCollectionsSnapsotToMap, firestore } from "../../firebase/firebase.util"
import {shopActionTypes} from "./shopActionTypes"


export const fetchCollectionsStart =() => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})
export const fetchCollectionsSuccess =(collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
})
export const fetchCollectionsFailure =(error) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})


export const fetchCollectionsStartAsync= () => {

    return dispatch => {
        const collectionRef= firestore.collection('collections')
        dispatch(fetchCollectionsStart())

            collectionRef.get().then(snapShot => {
             const collectionsMap=  convertCollectionsSnapsotToMap(snapShot)
             //updates shop reducer with data from Firebase
             dispatch(fetchCollectionsSuccess(collectionsMap))
        }) 
        
     
    }
}
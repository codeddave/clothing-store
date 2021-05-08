
import { shopActionTypes } from "./shopActionTypes";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (error) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});


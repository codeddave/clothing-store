
import {shopActionTypes} from "./shopActionTypes"

const INITIAL_STATE= {
    collections: null, 
    isFetching: false,
    error: null,
}

const shopReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case shopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true, 
            }
            case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
                return {
                    ...state,
                    collections: action.payload,
                    isFetching: false, 
                    error: null,
                }
            
                case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
                    return {
                        ...state,
                        isFetching: false,
                        error: action.payload, 
                    }
        default: 
        return state
    }
}

export default shopReducer;
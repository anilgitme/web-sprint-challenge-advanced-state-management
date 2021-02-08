import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED, POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAILED } from '../actions/';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
    isPosting: false
}

const reducer = (state = initialState, action) => {
    
    console.log(action);
    switch (action.type) {
        case FETCH_DATA_START: 
          return {
              ...state, isFetching: true, error: ''
          };
        case FETCH_DATA_SUCCESS: 
          return {
              ...state, smurfs: action.payload, isFetching: false, error: ''
          };
        case FETCH_DATA_FAILED:
          return {
              ...state, isFetching: false, error: 'Cant find smurfs'
          };
        case POST_DATA_START:
            return {
                ...state, isPosting: true,
            }
        case POST_DATA_SUCCESS:
            return {
                ...state, smurfs: action.payload, isPosting: false
            }
        case POST_DATA_FAILED:
            return {
                ...state, isPosting: false, error: 'Cant post smurfs'
            }

        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
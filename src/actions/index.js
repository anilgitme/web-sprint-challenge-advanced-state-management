import axios from 'axios';
//action creators for fetching
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
//posting
export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILED = 'POST_SMURF_FAILED'

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios.get('http://localhost:3333/smurfs')
        .then(result => {
            console.log(result.data);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: result.data })
        })
        .catch(error => dispatch({ type: FETCH_DATA_FAILED, payload: error.message }))
};

export const pushSmurfs = (newSmurf) => (dispatch) => {
    dispatch({ type: POST_DATA_START });
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(result => {
            console.log(result);
            dispatch({ type: POST_DATA_SUCCESS, payload: result.data })
        })
        .catch(error => {
            dispatch({ type: POST_DATA_FAILED, payload: error.message })
        })
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
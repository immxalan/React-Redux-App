import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_COMIC = "UPDATE_COMIC";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA});
    axios
    .get("https://sv443.net/jokeapi/v2/joke/Any?type=twopart")
    .then(res => 
        {console.log(res);
            dispatch({ type: UPDATE_COMIC, payload: res.data});
    })
    .catch(err => {
        console.log("error fetching from API", err);
        dispatch({type: SET_ERROR, payload: err.data})
    })

}

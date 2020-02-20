import { FETCH_DATA, UPDATE_COMIC, SET_ERROR } from "../actions/actions";
const initialState = {
    data: [],
    isFetchingData: false
}
export const ComicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return{
                ...state,
                isFetchingData: true,
                data: []
            };
        case UPDATE_COMIC:
            return{
                ...state,
                isFetchingData: false,
                data: action.payload
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                data: action.payload
            }
        default:
            return state
    }
}
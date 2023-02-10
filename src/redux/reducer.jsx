import { GET_MOVIES, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from './action';


const initialState = {
    movie: [],
    favMovie: []
}

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movie: action.payload }
        case ADD_FAVORITE_ITEM:
            return { ...state, favMovie: [...state.favMovie, action.payload] }
        default:
            return state;
    }
}
export default movieReducer;
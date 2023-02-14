import { GET_MOVIES, REMOVE_ITEM, ADD_CART } from './action';


const initialState = {
    movie: [],
    cart: [],
    number: 0
}

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movie: action.payload }

        case ADD_CART:
            //initialState.cart.push(action.payload)
            console.log(initialState.cart, "initialState.cart")
            return { ...state, cart: [...state.cart, action.payload] }

        case REMOVE_ITEM:
            console.log(initialState.cart, "initialState.cart from remove")
            return {
                ...state,
                cart: initialState.cart.filter((item) => item.id !== action.payload.id)
            }

        default:
            return state;
    }
}
export default movieReducer;
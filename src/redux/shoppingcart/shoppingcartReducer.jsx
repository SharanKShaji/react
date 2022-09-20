import { FETCH_SHOPPING_CART_FAILURE, FETCH_SHOPPING_CART_SUCCESS } from "./shoppingcartTypes"

const initialState  = {
    shoppingcart: [],
    error: ""
}
const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHOPPING_CART_SUCCESS:
            return {
                loading: false,
                shoppingcart: action.payload,
                error: ""
            }
        case FETCH_SHOPPING_CART_FAILURE:
            return {
                loading: false,
                shoppingcart: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default shoppingCartReducer;
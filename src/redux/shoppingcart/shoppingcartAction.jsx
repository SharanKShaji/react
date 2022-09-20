import { FETCH_SHOPPING_CART_FAILURE, FETCH_SHOPPING_CART_SUCCESS } from "./shoppingcartTypes"

export const fetchShoppingCartSuccess = (shoppingcart) => {
    return {
        type: FETCH_SHOPPING_CART_SUCCESS,
        payload: shoppingcart
    }
}

export const fetchShoppingCartFailure = (error) => {
    return {
        type: FETCH_SHOPPING_CART_FAILURE,
        payload: error
    }
}


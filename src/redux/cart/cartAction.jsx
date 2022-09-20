import { FETCH_CART_SUCCESS, FETCH_CART_FAILURE, TOTAL_PRICE } from "./cartType";

export const fetchCartSuccess = (cart) => {
    return {
        type: FETCH_CART_SUCCESS,
        payload: cart
    }
}

export const fetchCartFailure = (error) => {
    return {
        type: FETCH_CART_FAILURE,
        payload: error
    }
}

export const totalPrice = (sum) => {
    return {
        type: TOTAL_PRICE,
        payload: sum
    }
}


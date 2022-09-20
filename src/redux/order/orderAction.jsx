import { FETCH_CART_FAILURE, FETCH_CART_SUCCESS,TOTAL_PRICE } from "../cart/cartType"

 
export const fetchOrderSuccess = (order) =>{
return{
    type:FETCH_CART_SUCCESS,
    payload: order
}
}

export const fetchOrderFailure = (error) =>{
return{
    type:FETCH_CART_FAILURE,
    payload: error
}
}

export const totalPrice=(sums) =>{
return{
    type:TOTAL_PRICE,
    payload:sums
}
}

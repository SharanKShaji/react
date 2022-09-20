import {
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  TOTAL_PRICE
} from "./cartType";

const initialState  = {
  shoppingcart: [],
  error: "",
  sum:0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        error: "",
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        cart: [],
        error: action.payload,
      };
    case TOTAL_PRICE:
        return{
          ...state,
          sum:action.payload
        }
    default:
      return state;
  }
};
export default cartReducer;



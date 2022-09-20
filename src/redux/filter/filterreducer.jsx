// import { FETCH_CART_FAILURE, FETCH_CART_SUCCESS } from "../cart/cartType";
import { FETCH_FILTER_FAILURE, FETCH_FILTER_SUCCESS } from "./filtertype";

const initialState = {
  filter: [],
  error:""
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILTER_SUCCESS:
      return {
        ...state,
        filter: action.payload,
      };
    case FETCH_FILTER_FAILURE:
      return {
        ...state,
        error: "error",
      };
    default:
      return state;
  }
};

export default filterReducer
import { FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_SUCCESS } from "./categorytype";

const initialState = {
  category: [],
  error:""
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        error: "error",
      };
    default:
      return state;
  }
};

export default categoryReducer
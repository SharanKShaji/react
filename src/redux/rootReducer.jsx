import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingcart/shoppingcartReducer";
import cartReducer from "./cart/cartReducer"
import orderReducer from "./order/orderReducer"
import loginReducer from "./login/loginreducer";
import filterReducer from "./filter/filterreducer";
import categoryReducer from "./category/categoryreducer";

export const rootReducer = combineReducers({shoppingCartReducer,cartReducer,orderReducer,loginReducer,filterReducer,categoryReducer})

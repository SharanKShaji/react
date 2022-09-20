import { FETCH_CART_FAILURE, FETCH_CART_SUCCESS,TOTAL_PRICE } from "../cart/cartType";
const initialState = {
    shoppingcart: [],
    error: "",
    sums:0
}

const orderReducer =(state=initialState,action) =>{
    switch(action.type){
        case FETCH_CART_SUCCESS:
            return{   
                order:action.payload,
                error:"",
            };
            case FETCH_CART_FAILURE:
                return{
                    order:[],
                    error:action.payload,
                };
            case TOTAL_PRICE:
                return{
                    ...state,
                    sums:action.payload
                }
            default:
                return state;          
    }
}

export default orderReducer;


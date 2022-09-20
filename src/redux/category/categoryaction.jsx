import { FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_SUCCESS } from "./categorytype"

export const fetchCategorySuccess=(category)=>{
    return{
        type:FETCH_CATEGORY_SUCCESS,
        payload:category
    }
}

export const fetchCategoryFailure=(error)=>{
    return{
        type:FETCH_CATEGORY_FAILURE,
        payload:error
    }
}
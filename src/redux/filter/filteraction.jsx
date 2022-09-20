import { FETCH_FILTER_FAILURE, FETCH_FILTER_SUCCESS } from "./filtertype"

export const fetchFilterSuccess=(filter)=>{
    return{
        type:FETCH_FILTER_SUCCESS,
        payload:filter
    }
}

export const fetchFilterFailure=(error)=>{
    return{
        type:FETCH_FILTER_FAILURE,
        payload:error
    }
}
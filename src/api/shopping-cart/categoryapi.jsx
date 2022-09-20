import { fetchCategorySuccess } from "../../redux/category/categoryaction";


export const fetchCategory=(id)=>{
    return(dispatch)=>{
        
        fetch(`${process.env.REACT_APP_HOST}/cart?q=` + id)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            
            dispatch(fetchCategorySuccess(data))
        })
    }
}
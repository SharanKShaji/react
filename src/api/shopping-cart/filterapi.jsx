import { fetchFilterSuccess } from "../../redux/filter/filteraction";

export const fetchFilter=(id)=>{
    return(dispatch)=>{
       
        fetch(`${process.env.REACT_APP_HOST}/cart?q=` + id)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
        
            dispatch(fetchFilterSuccess(data))
        })
    }
}
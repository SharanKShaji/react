import { fetchOrderSuccess,fetchOrderFailure,totalPrice } from "../../redux/order/orderAction"


export const fetchOrder = () =>{
    let sum=0;
    return (dispatch) =>{
        fetch(`${process.env.REACT_APP_HOST}/order`)
        .then((res) =>{
            return res.json()
        })
        .then((data)=>{
            dispatch(fetchOrderSuccess(data));
            data.map((item)=>{
                sum+= item.Productprice
                dispatch(totalPrice(sum)); 
            })
        })
        .catch((error) => {
            dispatch(fetchOrderFailure(error.message));
          });
    }
}
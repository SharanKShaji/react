import axios from "axios";
import {
  fetchCartFailure,
  fetchCartSuccess,
  totalPrice
} from "../../redux/cart/cartAction";

export const fetchCart = () => {
  return (dispatch) => {
    axios.post("http://localhost:9000/userCart",{cartid:localStorage.getItem("cart_id")},{headers:{'token':String(localStorage.getItem("key"))}})
      .then((res) => {
        console.log(res)
        if(res.data.success){
          dispatch(fetchCartSuccess(res.data.result))
          dispatch(totalPrice(res.data.total[0].TOTAL))
        }
        else{
          dispatch(fetchCartFailure(res.data.result))
          console.log(res.data.message);
        }
      })
  }
}
export const fetchRemove = (removeId) => {
  return async () => {
    await axios.post("http://localhost:9000/remove",{removeId:removeId})
    .then((res)=>{
      console.log(res,"Done");
      // fetchCart()
    })
  };
  };
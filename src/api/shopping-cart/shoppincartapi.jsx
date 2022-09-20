import axios from "axios";
import { fetchShoppingCartFailure,fetchShoppingCartSuccess } from "../../redux/shoppingcart/shoppingcartAction"

export const fetchShoppingCart =(history) =>{
  return (dispatch) =>{
      axios.get("http://localhost:9000/shoppingCart",{headers:{'token':String(localStorage.getItem("key"))}})
      .then((res) => {
        if(res.data.success){
          console.log(res,"555");
          dispatch(fetchShoppingCartSuccess(res.data.result))
        }
        else{
          dispatch(fetchShoppingCartFailure(res.data.result))
          console.log(res.data.message);
          localStorage.removeItem("key");
          sessionStorage.removeItem("user");
          history.push('/');
        }
      })
      // .catch((res) =>{
      //   if(!res.data.token){
      //     localStorage.removeItem("key");
      //     sessionStorage.removeItem("user")
      //     history.push('/')
      //   }
      //   else{
      //     dispatch(fetchShoppingCartFailure(res))
      //   }
      // })
  }
}
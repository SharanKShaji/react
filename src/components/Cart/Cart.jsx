import { useEffect } from "react";
import CartProduct from "./Cartproduct";
import { fetchCart, fetchRemove } from "../../api/shopping-cart/cartapi";
import "./Cart.css";
import { connect, useDispatch } from "react-redux";
import axios from "axios";

function Cart({ fetchCart, Cartdata, sum }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleRemove = (removeId) => {
    console.log(removeId,"removed");
    dispatch(fetchRemove(removeId))
    .then(()=>{
      fetchCart()
    })
  };

  const increment=(id)=>{
    axios.post("http://localhost:9000/incrCount",{
      id:id,
    })
    .then(()=>{
      fetchCart()
    })
  }

  const decrement=(id) =>{
    console.log(id,"CLICKED Id");
    axios.post("http://localhost:9000/decrCount",{
      id:id
    })
    .then(()=>{
      fetchCart()
    })
  }


  return (
    <div>
      
      <div className="mainx">
          {Cartdata && Cartdata.map((viewSelect) => {
            <>{viewSelect.Productprice} {viewSelect.quantity}</>
            
            return (
              <>{console.log(viewSelect.quantity)}
              <CartProduct
                key={viewSelect.Productid}
                id={viewSelect.id}
                Name={viewSelect.name}
                price={viewSelect.price}
                img={viewSelect.image_id}
                stock={viewSelect.stock}
                productid={viewSelect.Productid}
                quantity={viewSelect.quantity}
                handleRemoveitem={handleRemove}
                fetchCart={fetchCart}
                increment={increment}
                decrement={decrement}
              />
              </>
            );
          })}
      </div>
      {Cartdata && Cartdata.length<1?<h1>Your cart is Empty</h1>
        :<div className="Order-total">
          <h1>TOTAL</h1>
          <h1 className="Order-sum">${sum}</h1>
        </div>}

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    Cartdata: state.cartReducer.cart,
    sum:state.cartReducer.sum
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

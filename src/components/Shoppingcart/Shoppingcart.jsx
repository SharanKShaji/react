import  { useEffect } from "react";
import "./Shoppingcart.css";
import Product from "./Products";
import { connect } from "react-redux";
import { fetchShoppingCart } from "../../api/shopping-cart/shoppincartapi";
import { useHistory } from "react-router-dom";

function Shoppingcart({ fetchShoppingCart, shoppingCartdata }) {
  const history=useHistory();
  useEffect(() => {
    fetchShoppingCart(history);
  }, [fetchShoppingCart]);

  return (
    <div>
      <div className="main">
        {shoppingCartdata &&
          shoppingCartdata.map((cart) => {
            return (
              <Product
                key={cart.id}
                id={cart.id}
                Name={cart.name}
                price={cart.price}
                img={cart.image_id}
                stock={cart.stock}
              />
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shoppingCartdata: state.shoppingCartReducer.shoppingcart
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShoppingCart: (history) => dispatch(fetchShoppingCart(history))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shoppingcart);

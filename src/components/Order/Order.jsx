import "./Order.css";
import { useEffect } from "react";
import { fetchOrder } from '../../api/shopping-cart/orderapi'
import { connect,useSelector } from "react-redux"
import OrderProduct from "./OrderProduct";


function Order({ fetchOrder, Orderdata }) {
  const sums = useSelector((state) => state.orderReducer.sums)
  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);
  return (

    <div className="Order-main">
      <div className="Order-product">
        {Orderdata &&
          Orderdata.map((viewSelect) => {
            return (
              <OrderProduct
                key={viewSelect.Productid}
                id={viewSelect.id}
                Name={viewSelect.Productname}
                price={viewSelect.Productprice}
                img={viewSelect.Productimg}
                stock={viewSelect.stock}
              />
            );
          })}
      </div>
      {Orderdata && Orderdata.length<1?<h1 className="orderX">You have no Orders yet</h1>
      :<div className="Order-total">
        <h1>TOTAL</h1>
        <h1 className="Order-sum">${sums}</h1>
      </div>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Orderdata: state.orderReducer.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: () => dispatch(fetchOrder()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);


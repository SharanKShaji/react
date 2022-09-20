import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchCart } from "../../api/shopping-cart/cartapi";
import { totalPrice } from "../../redux/cart/cartAction";
import './Cart.css'


class CartProduct extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: this.props.quantity
    }
  }


  handleOrderitem = (id) => {
    let countval = this.props.price * this.state.count;
    let balance=this.props.stock-this.state.count;

    let orderItem =
    {
      Productid: this.props.id,
      Productname: this.props.Name,
      Productprice: countval,
      Productimg: this.props.img,
      stock: this.state.count
    }

    fetch("http://localhost:3000/order", {
      method: 'POST',
      body: JSON.stringify(orderItem),
      headers: { 'Content-Type': 'application/json' }
    })

    fetch(`http://localhost:3000/cart/${id}`, 
    {
        method: 'PATCH',
        body: JSON.stringify({stock: balance}),
        headers: {'Content-Type': 'application/json',}
    })
  }

  render() {
    return (
      <div className="main-container">
        <div className="con-cartbody">
          <div className="conid">{this.props.cart_id}</div>
          <div className="conname">{this.props.Name}</div>
          <div className="conprice">${this.props.price}</div>
          <div className="conimg">
            <img src={this.props.img} alt=""></img>
          </div>
          {this.props.stock<1?<h1 className="stock">Currently out of stock</h1>
          :<div>stock:{this.props.stock}</div>}
          <div>
            {this.props.quantity}<br></br>
            <button className="countbtn countbtn1" disabled={this.state.count >= this.props.stock} onClick={()=>this.props.increment(this.props.id)}>+</button>
            <button className="countbtn countbtn2" disabled={this.state.count <= 1} onClick={()=>this.props.decrement(this.props.id)}>-</button>
          </div>
          <button className="con-button" onClick={() => this.props.handleRemoveitem(this.props.id)}>
            Remove
          </button>
          <button className="con-button" disabled={(this.state.count > this.props.stock) || (this.state.count <= 0)} onClick={()=>{this.handleOrderitem(this.props.productid);this.props.handleRemoveitem(this.props.id)}}>
            Buynow
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    sums: state.cartReducer.sum
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    totalPrice: (total) => dispatch(totalPrice(total)),
    fetchCart:()=>dispatch(fetchCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);

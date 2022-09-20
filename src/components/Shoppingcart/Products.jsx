import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { totalPrice } from "../../redux/cart/cartAction";
import "./Shoppingcart.css";


class Product extends Component {

  Cartclick = () => {
    axios.post("http://localhost:9000/cart",{
      Productid: this.props.id,
      Productname: this.props.Name,
      Productprice: this.props.price,
      Productimg: this.props.img,
      stock:this.props.stock,
      quantity:1,
      username:sessionStorage.getItem("user"),
      cart_id:localStorage.getItem("cart_id"),
      user_id:localStorage.getItem("user_id")
    })
    .then((res)=>{
      console.log(res);
    })
  }

  render() {
    return (
      <div className="main-container">
        <div className="con-body">
          <div className="conid">{this.props.id}</div>
          <div className="conname" >{this.props.Name}</div>
          <div className="conprice">${this.props.price}</div>
          <div className="conimg">
            <img src={this.props.img} alt=""></img>
          </div>
          <button className="cart-button" onClick={this.Cartclick}>Add to cart</button>
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
    totalPrice: (total) => dispatch(totalPrice(total))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);


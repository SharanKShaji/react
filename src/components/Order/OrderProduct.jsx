import React, { Component } from "react";
import './Order.css'

export default class OrderProduct extends Component {


  render() {
    return (
      <div className="main-container">
        <div className="con-cartbody">
          <div className="order-id">Orderid-{this.props.id}</div>
          <div className="conname">{this.props.Name}</div>
          <div className="conimg">
            <img src={this.props.img} alt=""></img>
          </div>
          <div className="conprice">${this.props.price}</div>
          <div className="order-id">Quantity - {this.props.stock}</div>
      </div>
      </div>
    );
  }
}

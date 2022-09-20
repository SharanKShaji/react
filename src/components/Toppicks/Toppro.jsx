import React, { Component } from "react";
import './Toppicks.css'


export default class Product extends Component {

  render() {
    return (
      <div className="container">
        <div className="containerbody">
          <div className="conid">{this.props.id}</div>
          <div className="conName">{this.props.Name}</div>
          <div className="conOffer">{this.props.offer}</div>
          <div className="conImg"><img src={this.props.img} alt=""></img></div>
        </div>
      </div>
    );
  }
}
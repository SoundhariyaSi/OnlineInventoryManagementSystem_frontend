import React, { Component } from 'react';
import axios from 'axios';
import "./Orderitem.css"

class Orderitempost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ord_item_id:0,
        ord_id:0,
        quantity:0,
        unitPrice:0
    };
  }

  handleItemIdChange = (event) => {
    this.setState({ ord_item_id: event.target.value });
  };
  handleOrderIdChange = (event) => {
    this.setState({ ord_id: event.target.value });
  };
 
  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };
  handlePriceChange = (event) => {
    this.setState({ unitPrice: event.target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const orderTable = {
        ord_item_id:this.state.ord_item_id,
        ord_id:this.state.ord_id,
        quantity:this.state.quantity,
        unitPrice:this.state.unitPrice

        
      };
    
      axios.post('http://127.0.0.1:8082/addorderitem', orderTable)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="order-form">
        <label className="order-item-id-label">OrderItem Id</label>
        <input
          className="order-item-id"
          type="text"
          value={this.state.ord_item_id}
          onChange={this.handleItemIdChange}
        />
        <label className="order-id-label">Order Id</label>
        <input
          className="order-id"
          type="text"
          value={this.state.ord_id}
          onChange={this.handleOrderIdChange}
        />
        
           <label className="order-quantity">Quantity</label>
        <input
          className="or_quantity"
          type="text"
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
        />
          <label className="unit-price">Unit Price</label>
        <input
          className="unit-price"
          type="text"
          value={this.state.unitPrice}
          onChange={this.handlePriceChange}
        />
          <button className="submit-button" type="submit">
          Submit
        </button>
        
      </form>
    );
  }
}

export default Orderitempost;  
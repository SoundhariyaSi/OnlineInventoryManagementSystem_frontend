import React, { Component } from 'react';
import axios from 'axios';
import "./Order.css"

class Orderpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        order_id:0,
        order_date:0,
        cust_name:'',
        contact_info:0,
        shipAddress:'',
        total:0,
        orderStatus:''
    };
  }

  handleOrderIdChange = (event) => {
    this.setState({ order_id: event.target.value });
  };
  handleOrderDateChange = (event) => {
    this.setState({ order_date: event.target.value });
  };
  handleNameChange = (event) => {
    this.setState({ cust_name: event.target.value });
  };
 
  handleInfoChange = (event) => {
    this.setState({ contact_info: event.target.value });
  };
  handleAddrChange = (event) => {
    this.setState({ shipAddress: event.target.value });
  };
  handleTotalChange = (event) => {
    this.setState({ total: event.target.value });
  };
  handleOrderStatusChange = (event) => {
    this.setState({ orderStatus: event.target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        order_id:this.state.ord_item_id,
        order_date:this.state.order_date,
        cust_name:this.state.cust_name,
        contact_info:this.state.contact_info,
        shipAddress:this.state.shipAddress,
        total:this.state.total,
        orderStatus:this.state.orderStatus

      };
    
      axios.post('http://127.0.0.1:8082/addorder', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="order-form">
        <label className="order-id-label">Order Id</label>
        <input
          className="order-id"
          type="text"
          value={this.state.order_id}
          onChange={this.handleOrderIdChange}
        />
         <label className="order-date-label">Order Date</label>
        <input
          className="ord-date"
          type="text"
          value={this.state.order_date}
          onChange={this.handleOrderDateChange}
        />

        <label className="cust-name-label">Customer Name</label>
        <input
          className="cust-name"
          type="text"
          value={this.state.cust_name}
          onChange={this.handleNameChange}
        />
        
           <label className="order-contactInfo">Contact Info</label>
        <input
          className="or_contact-info"
          type="text"
          value={this.state.contact_info}
          onChange={this.handleInfoChange}
        />
          <label className="ship-address">Shipping Address</label>
        <input
          className="order-address"
          type="text"
          value={this.state.shipAddress}
          onChange={this.handleAddrChange}
        />
         <label className="total">Total</label>
        <input
          className="order-total"
          type="text"
          value={this.state.total}
          onChange={this.handleTotalChange}
        />
         <label className="status">Order Status</label>
        <input
          className="order-status"
          type="text"
          value={this.state.orderStatus}
          onChange={this.handleOrderStatusChange}
        />
          <button className="submit-button" type="submit">
          Submit
        </button>
        
      </form>
    );
  }
}

export default Orderpost;  
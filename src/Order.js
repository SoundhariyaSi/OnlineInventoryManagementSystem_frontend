import axios from "axios";
import React, { Component } from "react";
import Orderpost from "./Orderpost";
import OrderDelete from "./OrderDelete";
import OrderUpdate from "./OrderUpdate"

class Order extends Component {
    categoryStyle = {
        color: '#CD7F32', // Change this to the desired color
        fontFamily: 'Arial, sans-serif',
      };
  state = {
    data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8082/showorders')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
fetchData = () => {
  axios
    .get('http://127.0.0.1:8082/showorders')
    .then((response) => {
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
};



  render() {   
    return (
        <div className="Order">
            <div className="Orderpost">
                <h2 style={this.categoryStyle}>Order Table:</h2>
                <Orderpost onDataUpdate={this.fetchData}  />
           </div>
            <table border={1}>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Order Date</th>
                   <th>Customer Name</th>
                   <th>Contact Info</th>
                   <th>Ship Address</th>
                    <th>Total</th>
                    <th>Order Status</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(user => (
                    <tr key={user.order_id}>
                      <th>{user.order_id}</th>
                        <td>{user.order_date}</td>
                        <td>{user.cust_name}</td>
                        <td>{user.contact_info}</td>
                        <td>{user.shipAddress}</td>
                        <td>{user.total}</td>
                        <td>{user.orderStatus}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        <OrderDelete onDataUpdate={this.fetchData} />
        <OrderUpdate onDataUpdate={this.fetchData} />
        </div>
        </div>
    );
  }}
  
export default Order;
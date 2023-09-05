import axios from "axios";
import React, { Component } from "react";
import Orderitempost from "./Orderitempost";
import "./Orderitem.css";
import OrderItemUpdate from "./OrderItemUpdate";
import OrderItemDelete from "./OrderItemDelete"

class OrderItem extends Component {
    categoryStyle = {
        color: '#CD7F32', // Change this to the desired color
        fontFamily: 'Arial, sans-serif',
      };
  state = {
    data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8082/showorderitem')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
fetchData = () => {
  axios
    .get('http://127.0.0.1:8082/showorderitem')
    .then((response) => {
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
};



  render() {   
    return (
        <div className="Orderitem">
            <div className="Orderitempost">
                <h2 style={this.categoryStyle}>The Order Item Table:</h2>
              <Orderitempost onDataUpdate={this.fetchData}  />
           </div>
            <table border={1}>
            <thead>
                <tr>
                    <th>OrderItem Id</th>
                    <th>Order Id</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(user => (
                    <tr key={user.ord_item_id}>
                      <td>{user.ord_item_id}</td>
                        <td>{user.ord_id}</td>
                        <td>{user.quantity}</td>
                        <td>{user.unitPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        <OrderItemDelete onDataUpdate={this.fetchData} />
        <OrderItemUpdate onDataUpdate={this.fetchData} />
        </div>
        </div>
    );
  }}
  
export default OrderItem;
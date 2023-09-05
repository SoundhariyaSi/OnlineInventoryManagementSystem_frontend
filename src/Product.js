import axios from "axios";
import React, { Component } from "react";
import ProductPost from "./ProductPost";
import ProductDelete from "./ProductDelete";
import ProductUpdate from './ProductUpdate'; 



class Product extends Component {
    categoryStyle = {
        color: '#CD7F32', // Change this to the desired color
        fontFamily: 'Arial, sans-serif',
      };
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8082/showproducts')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
fetchData = () => {
  axios
    .get('http://127.0.0.1:8082/showproducts')
    .then((response) => {
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
};


  render() {   
    return (
        <div className="Product">
            <div className="ProductPost">
                <h2 style={this.categoryStyle}>The Product Table:</h2>
              <ProductPost onDataUpdate={this.fetchData} />
           </div>
            <table border={1}>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>SKU</th>
                    <th>Product Name</th>
                    <th>Size</th>
                    <th>Colour</th>
                    <th>Gender</th>
                    <th>Supplier id</th>
                    <th>Purchase price</th>
                    <th>Retail price</th>
                    <th>Quantity</th>

                </tr>
            </thead>
            <tbody>
                {this.state.data.map(user => (
                    <tr key={user.product_id}>
                      <td>{user.product_id}</td>
                        <td>{user.sku}</td>
                        <td>{user.product_name}</td>
                        <td>{user.size}</td>
                        <td>{user.color}</td>
                        <td>{user.gender}</td>
                        <td>{user.supplier_id}</td>
                        <td>{user.purch_price}</td>
                        <td>{user.retail_price}</td>
                        <td>{user.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        <ProductDelete onDataUpdate={this.fetchData} />
        <ProductUpdate onDataUpdate={this.fetchData} />
        </div>
      </div>
    );
  }}
  
export default Product;
import React, { Component } from 'react';
import axios from 'axios';
import "./ProductPost.css"

class ProductPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product_id:0,
        sku:'',
        product_name: '',
        size: '',
        color:'',
        gender:'',
        supplier_id:0,
        purch_price:0,
        retail_price:0,
        quantity:0,
    };
  }

  handleIdChange = (event) => {
    this.setState({ product_id: event.target.value });
  };

  handleSkuChange = (event) => {
    this.setState({ sku: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ product_name: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  handleColourChange = (event) => {
    this.setState({ color: event.target.value });
  };
  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleSupplierChange = (event) => {
    this.setState({ supplier_id: event.target.value });
  };
  handlePriceChange = (event) => {
    this.setState({ purch_price: event.target.value });
  };
  handleRetailChange = (event) => {
    this.setState({ retail_price: event.target.value });
  };
  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        product_id:this.state.product_id,
        sku:this.state.sku,
        product_name:this.state.product_name,
        size:this.state.size,
        color:this.state.color,
        gender:this.state.gender,
        supplier_id:this.state.supplier_id,
        purch_price:this.state.purch_price,
        retail_price:this.state.retail_price,
        quantity:this.state.quantity,
        
      };
    
      axios.post('http://127.0.0.1:8082/addproduct', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="product-form">
        <label className="product-id-label">Id</label>
        <input
          className="product-id"
          type="text"
          value={this.state.product_id}
          onChange={this.handleIdChange}
        />
        <label className="product_sku">Sku</label>
        <input
          className="pr_sku"
          type="text"
          value={this.state.sku}
          onChange={this.handleSkuChange}
        />

        <label className="product-name">Name</label>
        <input
          className="pr_name"
          type="text"
          value={this.state.product_name}
          onChange={this.handleNameChange}
        />

        <label className="product-size">Size</label>
        <input
          className="pr_size"
          type="text"
          value={this.state.size}
          onChange={this.handleSizeChange}
        />
        <label className="product-colour">Color</label>
        <input
          className="pr_color"
          type="text"
          value={this.state.color}
          onChange={this.handleColourChange}
        />

        <label className="product-gender">Gender</label>
        <input
          className="pr_gender"
          type="text"
          value={this.state.gender}
          onChange={this.handleGenderChange}
        />
        <label className="product-supplier">Supplier Id</label>
        <input
          className="pr_supplier"
          type="text"
          value={this.state.supplier_id}
          onChange={this.handleSupplierChange}
        />
          <label className="product-price">Purchase Price</label>
        <input
          className="pr_price"
          type="text"
          value={this.state.purch_price}
          onChange={this.handlePriceChange}
        />
          <label className="product-retailer">Retail price</label>
        <input
          className="pr_ret_price"
          type="text"
          value={this.state.retail_price}
          onChange={this.handleRetailChange}
        />
           <label className="product-quantity">Quantity</label>
        <input
          className="pr_quantity"
          type="text"
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
        />
          <button className="submit-button" type="submit">
          Submit
        </button>
        
      </form>
    );
  }
}

export default ProductPost;  
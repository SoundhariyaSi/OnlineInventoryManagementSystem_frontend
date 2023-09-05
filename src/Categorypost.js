import React, { Component } from 'react';
import axios from 'axios';
import "./Category.css"

class Categorypost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:0,
        categoryname:'',
      
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };
  handleNameChange = (event) => {
    this.setState({ categoryname: event.target.value });
  };
 
 
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        id:this.state.id,
        categoryname:this.state.categoryname,
      };
    
      axios.post('http://127.0.0.1:8082/addcategory', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="cat-form">
        <label className="cat-id-label">Id</label>
        <input
          className="cat-id"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />
        <label className="cat-name-label">Category</label>
        <input
          className="cat-name"
          type="text"
          value={this.state.categoryname}
          onChange={this.handleNameChange}
        />
          <button className="submit-button" type="submit">
          Submit
        </button>
        
      </form>
    );
  }
}

export default Categorypost; 

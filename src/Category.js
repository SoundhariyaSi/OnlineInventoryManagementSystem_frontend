import axios from "axios";
import React, { Component } from "react";
import Categorypost from "./Categorypost";
import CategoryDelete from "./CategoryDelete";
import CategoryUpdate from "./CategoryUpdate"

class Category extends Component {
    categoryStyle = {
        color: '#CD7F32', // Change this to the desired color
        fontFamily: 'Arial, sans-serif',
      };
  state = {
    data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8082/showcat')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
fetchData = () => {
  axios
    .get('http://127.0.0.1:8082/showcat')
    .then((response) => {
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
};


  render() {   
    return (
        <div className="Category">
            <div className="categorypost">
                <h2  style={this.categoryStyle}> Category Table:</h2>
              <Categorypost onDataUpdate={this.fetchData} />
           </div>
            <table border={1}>
            <thead>
                <tr>
                    <th>Category Id</th>
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(user => (
                    <tr key={user.id}>
                      <th>{user.id}</th>
                      <td>{user.categoryname}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        <CategoryDelete onDataUpdate={this.fetchData} />
        <CategoryUpdate onDataUpdate={this.fetchData} />
        </div>
        </div>
    );
  }}
  
export default Category;
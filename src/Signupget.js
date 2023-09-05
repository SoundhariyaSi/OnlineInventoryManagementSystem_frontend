import axios from "axios";
import React, { Component } from "react";
import SignUp from "./SignUp"

class Signupget extends Component {
  state = {
    data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8082/showsignup')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div className="SignUp">
            <div className="SignUppost">
              <SignUp />
           </div>
            <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                   <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(user => (
                    <tr key={user.password}>
                       <th>{user.name}</th>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
  }}
  
export default Signupget;
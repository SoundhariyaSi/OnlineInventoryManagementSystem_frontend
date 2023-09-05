import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    // Replace the URL with your server's endpoint
    axios.post('http://127.0.0.1:8082/addsignup', data)
      .then((response) => {
        // Handle a successful response here
        console.log('POST request successful:', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error making POST request:', error);
      });
  };

  render() {
    return (
      <div className="auth-form-container">
        <h2>Sign-Up</h2>
        <form onSubmit={this.handleSubmit} className="sign-form">
          <label className="sign-name">Name</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Full Name"
          />

          <label className="sign-email">Email</label>
          <input
            className="sign-input"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="youremail@gmail.com"
          />

          <label className="sign-pwd">Password</label>
          <input
            className="login-input"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="**********"
          />

          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
        <Link to="/login" className="link-btn">Already have an account?Login here.</Link>
      </div>
    );
  }
}

export default Signup;

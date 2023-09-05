import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here (e.g., send a request to the server for authentication)
    // If login is successful, set isLoggedIn to true
    // For demonstration purposes, we'll just simulate a successful login after 2 seconds
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  };

  return (
    <div className="auth-form-container">
      <h2>Log-in</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
        />
        <button type="submit" id="login">
          Log In
        </button>
      </form>
      {/* Display success message if isLoggedIn is true */}
      {isLoggedIn && <p>Logged in successfully! You are now ready to order!</p>}
      <Link to="/signupget" className="link-btn">
        Don't have an account? Register here.
      </Link>
    </div>
  );
};

export default Login;
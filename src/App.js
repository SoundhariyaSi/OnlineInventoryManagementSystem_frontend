import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Signupget from "./Signupget";
import "./App.css";
import Category from "./Category";
import Product from "./Product";
import OrderItem from "./OrderItem";
import Order from "./Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/orders" element={<OrderItem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signupget" element={<Signupget />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App; 
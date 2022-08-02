import React from "react";
import "./HomePage.css";
import tshirt from "../images/tshirt.jpg";
function HomePage() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="main_container">
      <div className="header">
        <div className="logo">Shopping Time</div>
        <div className="header_link">
          <p>Home</p>
          <p>Products</p>
          <p>Categories</p>
          <p>Services</p>
        </div>
        <div className="header_right">
          <p>Contact Us</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="front">
        <div className="row_item">
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
        </div>
        <div className="row_item">
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
        </div>
        <div className="row_item">
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
          <div className="row_items">
            <img src={tshirt} alt="tshirt" />
            <h3>T-shirt 1 Men</h3>
            <h4>$10.00</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import logo from "./assets/abhi-food-logo.png";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://slninfosys.com/wp-content/uploads/2026/05/abhi-food-logo.png"
        />
      </div>
      <div className="nav-item">
        <ul className="nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestuarantCard = () =>{
  return(
    <div className="res-card">
      <img className="dosa-image" alt="dosa" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/12/10/9375c230-711e-4858-b8e2-d4eb4cbb6d13_417aae9d-8c74-4956-85c4-a68ad9dfe39a.png_compressed"/>
      <h3 id="heading-res">Millet Express</h3>
      <h3><span style={{color:"green"}}>4.5 </span>Star</h3>
      <h4>Healty Food, South India</h4>
    </div>
  )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
              <RestuarantCard/>
              <RestuarantCard/>
              <RestuarantCard/>
              <RestuarantCard/>
              <RestuarantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

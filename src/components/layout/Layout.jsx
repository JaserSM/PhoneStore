import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import "./Layout.css";
import iconCart from "../../assets/cart.svg";


const Layout = ({ children, pageName, phone }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  const handleHeaderClick = () => {
    navigate(`/home`);
  };

  useEffect(() => {
    const localCount = localStorage.getItem("cartPhones");
    if(localCount){
      setCount(localStorage.getItem("cartPhones"));
    }
  }, [pageName, phone]);

  return (
    <div className="App">
      <header onClick={handleHeaderClick}>
        <div className="headerTitle">
          <h1>{">"} Phone Store </h1>
          <h2>{">"} &nbsp; Tu tienda de tecnología online </h2>
        </div>
        <div className="headerCart">
          <img src={iconCart} alt="cart" width={24}/>
          <span className="headerCart">{count}</span>
        </div>

      </header>
      <div className="breadcrumbs">
        {
        pageName == "Home" ?
        <p>Products{" -> "}Phones</p>
        :
        <p>Products{" -> "}<span onClick={handleHeaderClick} style={{cursor: "pointer"}}>Phones</span>{` -> ${phone.brand}-${phone.model}`}</p>
        }

      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
import { useNavigate } from "react-router";
import React from "react";
import "./Layout.css";


const Layout = ({ children, pageName, phone }) => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate(`/home`);
  };

  return (
    <div className="App">
      <header onClick={handleHeaderClick}>
        <h1>{">"} Phone Store </h1>
        <h2>{">"} &nbsp; Tu tienda de tecnología online </h2>
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
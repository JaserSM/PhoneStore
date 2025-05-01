import { useNavigate } from "react-router";
import Search from "../search/Search";
import React from "react";
import "./Layout.css";


const Layout = ({ children, search }) => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    console.log("click");
    navigate(`/home`);
  };

  return (
    <div className="App">
      <header onClick={handleHeaderClick}>
        <h1>{">"} Phone Store </h1>
        <h2>{">"} &nbsp; Tu tienda de teléfonos online </h2>
      </header>
      {search && <Search/>}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
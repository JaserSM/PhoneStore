import Search from "../search/Search";
import React from "react";


const Layout = ({ children, search }) => {


  return (
    <div className="App">
      <header>
        <h1>{">"} Phone Store </h1>
        <h2>{">"} &nbsp; Tu tienda de teléfonos online </h2>
      </header>
      {search && <Search/>}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
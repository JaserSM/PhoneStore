import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <nav>
        <div className='navInputContainer'>
          <input type="search" placeholder='Buscar ...' className='search'/>
        </div>
      </nav>
  );
};

export default Search;
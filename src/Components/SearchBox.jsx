import React, { useState } from "react";

const SearchBox = (props) => {
  return (
    <div className="search-box" onKeyDown={props.search}>
      <input
        type="text"
        className="search-bar"
        placeholder="Country..."
        onChange={(e) => props.setQueryCountry(e.target.value)}
        value={props.queryCountry}
      />

      <input
        type="text"
        className="search-bar"
        placeholder="City..."
        onChange={(e) => props.setQuery(e.target.value)}
        value={props.query}
      />
    </div>
  );
};

export default SearchBox;

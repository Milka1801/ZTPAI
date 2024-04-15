import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

const SearchBar = ({ search, setSearch, data }) => {
  return (
    <ReactSearchBox
      placeholder="Search ..."
      value={search}
      
      data={data}
      onChange={(record) => setSearch(record)}
    />
  );
};

export default SearchBar;
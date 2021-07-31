import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    // if we want to do something with out state right after we set it we need to do it
    // inside the second arguement of setState function, that is called right after the set state
    // is called
  />
);

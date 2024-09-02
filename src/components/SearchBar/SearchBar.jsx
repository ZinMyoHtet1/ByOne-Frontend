/* eslint-disable react/prop-types */
import { useState } from "react";
import { searchIcon } from "../../assets";
import "./searchbar.css";

const SearchBar = ({ placeholder }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="search-bar">
      <input
        type="text"
        className={`search-input ${active ? "active" : ""}`}
        placeholder={placeholder}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <div className="search-btn btn" onClick={() => console.log("clicked")}>
        <img src={searchIcon} alt="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { upArrowIcon } from "../../assets";
import "./filter-challenge.css";
const FilterChallenge = ({ label, options, name, value, handleChange }) => {
  const [touched, setTouched] = useState(false);
  return (
    <div className="filter">
      <div className="label">{label}</div>
      {/* <div className="options">{options}</div> */}
      <div className="form-control options">
        {/* <label htmlFor={name}>{label}</label> */}
        <select
          name={name}
          id={name}
          onChange={(e) => {
            handleChange(e);
            setTouched(false);
          }}
          value={value}
          onFocus={() => setTouched(true)}
          onBlur={() => setTouched(false)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <img
          src={upArrowIcon}
          alt="up-arrow-icon"
          className={`up-arrow-icon ${touched ? "touched" : ""}`}
        />
      </div>
    </div>
  );
};

export default FilterChallenge;

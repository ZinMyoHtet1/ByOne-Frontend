/* eslint-disable react/prop-types */
import { useState } from "react";
import "./botnavigator.css";

import { NavLink } from "react-router-dom";

const BotNavigator = ({ outlineIcon, fillIcon, label, to }) => {
  const [active, setActive] = useState(false);
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        setActive(isActive);
        return isActive ? "bot-nav active" : "bot-nav";
      }}
    >
      {active ? fillIcon : outlineIcon}
      <div className="nav-label">{label}</div>
    </NavLink>
  );
};

export default BotNavigator;

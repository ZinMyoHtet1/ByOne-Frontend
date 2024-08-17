/* eslint-disable react/prop-types */

import "./drawer-item.css";

const DrawerItem = ({ icon, label }) => {
  return (
    <div className="drawer-item">
      <div className="drawer-item-icon">
        <img src={icon} alt="drawer-item-icon" />
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default DrawerItem;

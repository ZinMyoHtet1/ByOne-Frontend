/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { backBtnIcon } from "../../assets";
import "./side-drawer.css";
import { DrawerItem } from "../../components";

const SideDrawer = ({ openDrawer, setOpenDrawer }) => {
  useEffect(() => {
    const handleCloseDrawer = (e) => {
      if (openDrawer && !e.target.closest(".drawer-wrapper,#side-drawer-btn")) {
        setOpenDrawer(false);
      }
    };
    document.addEventListener("click", handleCloseDrawer);

    return () => {
      document.removeEventListener("click", handleCloseDrawer);
    };
  }, [openDrawer, setOpenDrawer]);

  return (
    <div id="side-drawer">
      <div className={`drawer-wrapper ${openDrawer ? "open" : ""}`}>
        <div className="drawer-nav">
          <img
            src={backBtnIcon}
            alt="back-icon"
            className="back-btn"
            onClick={() => setOpenDrawer(false)}
          />
          <img
            src="https://images.unsplash.com/photo-1511213966740-24d719a0a814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile-img"
            className="profile-img"
          />
        </div>
        <div className="drawer-item-container">
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;

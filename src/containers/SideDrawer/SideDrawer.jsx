/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { backBtnIcon, logoutIcon, settingIcon, squadIcon } from "../../assets";
import "./side-drawer.css";
import { DrawerItem } from "../../components";
import { useNavigate } from "react-router";

const SideDrawer = ({
  openDrawer,
  setOpenDrawer,
  setShowToast,
  setToastLabel,
}) => {
  const navigate = useNavigate();
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

  const handleGoProfile = () => {
    navigate("/profile");
    setOpenDrawer(false);
  };

  const handleNavigate = (to) => {
    navigate(to);
    setOpenDrawer(false);
  };

  const handleToast = (label) => {
    setToastLabel(label);
    setShowToast(true);
    setOpenDrawer(false);
  };
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
            onClick={handleGoProfile}
          />
        </div>
        <div className="drawer-item-container">
          <DrawerItem
            icon={squadIcon}
            label="squads"
            handleClick={() => handleNavigate("/squads")}
          />
          <DrawerItem
            icon={settingIcon}
            label="setting"
            handleClick={() => handleToast("setting")}
          />
          <DrawerItem
            icon={logoutIcon}
            label="logout"
            handleClick={() => handleToast("logout")}
          />
        </div>
        <div className="copyright">
          2024 <span className="copyright-entity">&#169;</span> Copyright by
          <span className="app-name"> ByOne</span>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;

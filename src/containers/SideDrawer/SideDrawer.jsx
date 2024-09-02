import { useEffect } from "react";

import { backBtnIcon, logoutIcon, settingIcon, squadIcon } from "../../assets";
import "./side-drawer.css";
import { DrawerItem } from "../../components";
import { useNavigate } from "react-router";
import { showToast } from "../../actions/uiActions";

import { useDispatch, useSelector } from "react-redux";
import { HIDE_DRAWER } from "../../constants";

const SideDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showDrawer } = useSelector((state) => state.ui);

  useEffect(() => {
    const handleCloseDrawer = (e) => {
      if (showDrawer && !e.target.closest(".drawer-wrapper,#side-drawer-btn")) {
        dispatch({ type: HIDE_DRAWER });
      }
    };
    document.addEventListener("click", handleCloseDrawer);

    return () => {
      document.removeEventListener("click", handleCloseDrawer);
    };
  }, [showDrawer, dispatch]);

  const handleGoProfile = () => {
    navigate("/profile");
    dispatch({ type: HIDE_DRAWER });
  };

  const handleNavigate = (to) => {
    navigate(to);
    dispatch({ type: HIDE_DRAWER });
  };

  const handleToast = (label) => {
    dispatch(showToast(label));
    dispatch({ type: HIDE_DRAWER });
  };
  return (
    <div id="side-drawer">
      <div className={`drawer-wrapper ${showDrawer ? "open" : ""}`}>
        <div className="drawer-nav">
          <img
            src={backBtnIcon}
            alt="back-icon"
            className="back-btn"
            onClick={() => dispatch({ type: HIDE_DRAWER })}
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

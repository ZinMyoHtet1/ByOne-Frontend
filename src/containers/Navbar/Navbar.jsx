import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  appLogoIcon,
  bellIcon,
  grangerHero,
  humburgerIcon,
  zilongHero,
} from "../../assets";
import "./navbar.css";
import { SHOW_DRAWER } from "../../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div id="navbar">
      <img
        src={humburgerIcon}
        alt="side-drawer"
        id="side-drawer-btn"
        onClick={() => dispatch({ type: SHOW_DRAWER })}
      />
      <div className="middle-nav">
        <img src={zilongHero} alt="zilong-hero" />
        <img src={appLogoIcon} alt="app-logo" id="app-logo" />
        <img src={grangerHero} alt="granger-hero" />
      </div>
      <img
        src={bellIcon}
        alt="notifications"
        className="notication-icon"
        onClick={() => navigate("/notifications")}
      />
    </div>
  );
};

export default Navbar;

/* eslint-disable react/prop-types */
import {
  appLogoIcon,
  bellIcon,
  grangerHero,
  humburgerIcon,
  zilongHero,
} from "../../assets";
import "./navbar.css";

const Navbar = ({ setOpenDrawer }) => {
  return (
    <div id="navbar">
      <img
        src={humburgerIcon}
        alt="side-drawer"
        id="side-drawer-btn"
        onClick={() => setOpenDrawer(true)}
      />
      <div className="middle-nav">
        <img src={zilongHero} alt="zilong-hero" />
        <img src={appLogoIcon} alt="app-logo" id="app-logo" />
        <img src={grangerHero} alt="granger-hero" />
      </div>
      <img src={bellIcon} alt="notifications" />
    </div>
  );
};

export default Navbar;

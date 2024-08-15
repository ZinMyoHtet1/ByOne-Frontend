import "./root.css";

import { Outlet } from "react-router";

import { BottomNavigation, Navbar } from "../../containers";
const RootLayout = () => {
  return (
    <div id="root-layout">
      <div className="wrapper">
        <Navbar />
        <BottomNavigation />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

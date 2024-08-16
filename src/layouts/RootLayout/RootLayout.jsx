import "./root.css";

import { Outlet } from "react-router";

import { BottomNavigation, Navbar, SideDrawer } from "../../containers";
import { useState } from "react";
const RootLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div id="root-layout">
      <div className="wrapper">
        <Navbar setOpenDrawer={setOpenDrawer} />
        <BottomNavigation />
        <Outlet />
        {openDrawer ? (
          <SideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        ) : null}
      </div>
    </div>
  );
};

export default RootLayout;

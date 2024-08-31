import "./root.css";

import { Outlet } from "react-router";

import { BottomNavigation, Navbar, SideDrawer } from "../../containers";
import { useEffect, useState } from "react";
import { Toast } from "../../components";
const RootLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastLabel, setToastLabel] = useState("");

  useEffect(() => {
    if (showToast) setTimeout(() => setShowToast(false), 2000);
  }, [showToast]);

  return (
    <div id="root-layout">
      <div className="wrapper">
        <Navbar setOpenDrawer={setOpenDrawer} />
        <BottomNavigation />
        <Outlet />
        {openDrawer ? (
          <SideDrawer
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            setShowToast={setShowToast}
            setToastLabel={setToastLabel}
          />
        ) : null}
      </div>
      <Toast label={toastLabel} show={showToast} />
    </div>
  );
};

export default RootLayout;

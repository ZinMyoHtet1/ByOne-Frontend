import "./root.css";

import { Outlet } from "react-router";

import { BottomNavigation, Navbar, SideDrawer } from "../../containers";
import { useEffect } from "react";
import { Toast } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import { hideToast } from "../../actions/uiActions";

const RootLayout = () => {
  const { showToast, toastLabel, showDrawer } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (showToast) setTimeout(() => dispatch(hideToast()), 2000);
  }, [dispatch, showToast]);

  return (
    <div id="root-layout">
      <div className="wrapper">
        <Navbar />
        <BottomNavigation />
        <Outlet />
        {showDrawer ? <SideDrawer /> : null}
      </div>
      <Toast label={toastLabel} show={showToast} />
    </div>
  );
};

export default RootLayout;

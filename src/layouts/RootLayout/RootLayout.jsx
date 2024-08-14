import "./root.css";
import { BottomNavigation, Navbar } from "../../containers";
const RootLayout = () => {
  return (
    <div id="root-layout">
      <div className="wrapper">
        <Navbar />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default RootLayout;

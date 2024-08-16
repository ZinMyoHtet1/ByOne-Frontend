import { notiBackBtn } from "../../assets";
import "./noti-navbar.css";

const NotiNavbar = () => {
  const back = () => {
    window.history.back();
  };
  return (
    <div id="noti-navbar">
      <img
        className="back-btn"
        src={notiBackBtn}
        alt="noti-back-btn"
        onClick={back}
      />
      <div className="label">notifications</div>
    </div>
  );
};

export default NotiNavbar;

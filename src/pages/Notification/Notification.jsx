import { NotiController } from "../../components";
import { NotiNavbar } from "../../containers";
import "./notification.css";

const Notification = () => {
  return (
    <div id="notification" className="full-page">
      <NotiNavbar />
      <div className="noti-container">
        <NotiController control="challenge" seen />
        <NotiController control="challenge" />
        <NotiController control="challenge" />
        <NotiController control="challenge" seen />
        <NotiController control="challenge" />
        <NotiController control="challenge" />
        <NotiController control="challenge" />
        <NotiController control="challenge" />
        <NotiController control="challenge" />
      </div>
    </div>
  );
};

export default Notification;

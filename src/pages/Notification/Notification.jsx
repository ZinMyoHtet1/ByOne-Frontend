import { NotiController } from "../../components";
import { NotiNavbar } from "../../containers";
import "./notification.css";

const Notification = () => {
  return (
    <div id="notification" className="full-page">
      <NotiNavbar />
      <div className="noti-container">
        <NotiController control="challenge" challenger="Sensei" seen />
        {/* <NotiController control="accept" accepter="Gucci" />
        <NotiController control="challenge" challenger="Sensei" />
        <NotiController control="challenge" challenger="Sensei" seen />
        <NotiController control="victory" />
        <NotiController control="deny" denier="Rolex" />
        <NotiController control="challenge" challenger="Sensei" />
        <NotiController control="invite" inviter="Ranger" squad="SuperTeam" />
        <NotiController control="victory" seen />
        <NotiController control="challenge" challenger="Sensei" /> */}
      </div>
    </div>
  );
};

export default Notification;

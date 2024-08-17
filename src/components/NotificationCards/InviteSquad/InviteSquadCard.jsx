/* eslint-disable react/prop-types */
const InviteSquadCard = ({ inviter, squad, seen = false }) => {
  return (
    <div className="noti-card">
      <div className="border-box">
        <span className="top-border"></span>
        <div className="noti-text">
          <span className="inviter">{inviter}</span> invites you to become a
          member of{" "}
          <span className="squad-name" style={{ fontWeight: 500 }}>
            {squad}
          </span>{" "}
          squad. Join and fight together for victory.
        </div>
        <div className="header">
          <div className="label">Inviting</div>
          <span className={`seen-circle ${seen ? "seen" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default InviteSquadCard;

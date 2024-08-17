/* eslint-disable react/prop-types */

const RedeemCard = ({ seen = false }) => {
  return (
    <div className="noti-card">
      <div className="border-box">
        <span className="top-border"></span>
        <div className="noti-text">
          <span style={{ color: "var(--green-color)", fontWeight: 400 }}>
            Congratulations!
          </span>{" "}
          You win the fight and successfully redeem your prize.Be happy and keep
          fight!
        </div>
        <div className="header">
          <div className="label">Victory</div>
          <span className={`seen-circle ${seen ? "seen" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default RedeemCard;

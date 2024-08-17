/* eslint-disable react/prop-types */
import "./challenge-you.css";
const ChallengeYouCard = ({ challenger, seen = false }) => {
  return (
    <div className="noti-card">
      <div className="border-box">
        <span className="top-border"></span>
        <div className="noti-text">
          <span className="challenger">{challenger}</span> challenges you to
          fight with him.Let’s him know your skills
        </div>
        <div className="header">
          <div className="label">Challenging You</div>
          <span className={`seen-circle ${seen ? "seen" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default ChallengeYouCard;

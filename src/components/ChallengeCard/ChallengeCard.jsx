import { mlbbSmallImg } from "../../assets";
import "./challenge-card.css";
const ChallengeCard = () => {
  return (
    <div className="challenge-card">
      <div className="challenge-header">
        <div className="challenger-profile">Name</div>
        <img src={mlbbSmallImg} alt="mlbb-logo-img" className="mlbb-logo-img" />
        <div className="date">4 days ago</div>
      </div>
    </div>
  );
};

export default ChallengeCard;
